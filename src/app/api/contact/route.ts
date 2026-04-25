import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const resendApiKey = process.env.RESEND_API_KEY;
const toEmail = process.env.CONTACT_TO_EMAIL || "desenvolvimento.luna@gmail.com";
const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const phone = body.phone?.trim() || "Não informado";
    const message = body.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Preencha nome, e-mail e mensagem para enviar." },
        { status: 400 }
      );
    }

    if (!resendApiKey) {
      return NextResponse.json(
        {
          message:
            "Configuração de e-mail pendente no servidor (RESEND_API_KEY).",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const html = [
      "<p><strong>Novo formulário recebido</strong></p>",
      `<p><strong>Nome:</strong> ${name}</p>`,
      `<p><strong>E-mail:</strong> ${email}</p>`,
      `<p><strong>Telefone:</strong> ${phone}</p>`,
      `<p><strong>Mensagem:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
    ].join("");

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Novo contato do site - ${name}`,
      replyTo: email,
      html,
    });

    if (error) {
      return NextResponse.json(
        { message: "Não foi possível enviar o e-mail no momento." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { message: "Erro ao processar sua solicitação." },
      { status: 500 }
    );
  }
}
