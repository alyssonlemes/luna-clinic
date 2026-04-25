"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    setSent(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Não foi possível enviar sua mensagem.");
      }

      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (submitError) {
      const message = submitError instanceof Error ? submitError.message : "Erro ao enviar mensagem.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin size={20} />,
      label: "Endereço",
      value: "R. Antônio Tôrres Penedo, 460 - São Joaquim\nFranca - SP, 14406-352, Brasil",
      color: "bg-[#E8EEF5] text-[#315888]",
    },
    {
      icon: <Phone size={20} />,
      label: "Telefone / WhatsApp",
      value: "+55 16 99440-3306",
      color: "bg-[#E3EBF4] text-[#8BA5C4]",
    },
    {
      icon: <Mail size={20} />,
      label: "E-mail",
      value: "desenvolvimento.luna@gmail.com",
      color: "bg-[#EDF2F8] text-[#315888]",
    },
    {
      icon: <Clock size={20} />,
      label: "Horários",
      value: "Seg–Sex: 8h às 18h\nSábado: 8h às 12h",
      color: "bg-[#EAF0F7] text-[#0A2B53]",
    },
  ];

  return (
    <section id="contato" className="py-24 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Fale com a gente
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-4">
            Estamos aqui para{" "}
            <em className="italic text-[#315888]">te ouvir</em>
          </h2>
          <p className="text-luna-gray leading-relaxed">
            Tem dúvidas? Quer saber se seu filho precisa de acompanhamento? Entre
            em contato — adoramos conversar com as famílias.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Info cards — left */}
          <div className="lg:col-span-2 space-y-4 reveal-left">
            {contactInfo.map((info) => (
              <div
                key={info.label}
                className="bg-white rounded-2xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${info.color}`}>
                  {info.icon}
                </div>
                <div>
                  <p className="font-semibold text-luna-charcoal text-sm mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-luna-gray text-sm whitespace-pre-line leading-relaxed">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Google Maps embed */}
            <div className="bg-[#E8EEF5] rounded-2xl h-48 border border-[#315888]/20 overflow-hidden relative">
              <iframe
                title="Localizacao da Luna Clinic no Google Maps"
                src="https://www.google.com/maps?q=R.%20Ant%C3%B4nio%20T%C3%B4rres%20Penedo%2C%20460%20-%20S%C3%A3o%20Joaquim%2C%20Franca%20-%20SP%2C%2014406-352&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a
                href="https://www.google.com/maps/search/?api=1&query=R.%20Ant%C3%B4nio%20T%C3%B4rres%20Penedo%2C%20460%20-%20S%C3%A3o%20Joaquim%2C%20Franca%20-%20SP%2C%2014406-352"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white/90 text-[#315888] text-xs font-medium px-3 py-1.5 rounded-lg shadow-sm hover:bg-white transition-colors"
              >
                Abrir no Google Maps
              </a>
            </div>
          </div>

          {/* Form — right */}
          <div className="lg:col-span-3 reveal">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-luna-charcoal mb-2">
                Envie uma mensagem
              </h3>
              <p className="text-luna-gray text-sm mb-7">
                Preencha o formulário para recebermos por e-mail.
              </p>

              {sent && (
                <div className="bg-[#E3EBF4] border border-[#8BA5C4]/35 rounded-2xl p-4 mb-6 text-luna-dark-soft text-sm">
                  ✅ Obrigado! Sua mensagem foi enviada com sucesso. Aguarde nosso contato!
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-4 mb-6 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-luna-charcoal text-sm font-medium mb-1.5">
                      Seu nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Maria da Silva"
                      className="w-full bg-[#FAFCFF] border border-[#315888]/20 rounded-xl px-4 py-3 text-luna-charcoal text-sm focus:outline-none focus:border-[#315888] focus:ring-2 focus:ring-[#315888]/20 transition-all placeholder:text-luna-gray-light"
                    />
                  </div>
                  <div>
                    <label className="block text-luna-charcoal text-sm font-medium mb-1.5">
                      Seu e-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="maria@email.com"
                      className="w-full bg-[#FAFCFF] border border-[#315888]/20 rounded-xl px-4 py-3 text-luna-charcoal text-sm focus:outline-none focus:border-[#315888] focus:ring-2 focus:ring-[#315888]/20 transition-all placeholder:text-luna-gray-light"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-luna-charcoal text-sm font-medium mb-1.5">
                    Telefone / WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(16) 99440-3306"
                    className="w-full bg-[#FAFCFF] border border-[#315888]/20 rounded-xl px-4 py-3 text-luna-charcoal text-sm focus:outline-none focus:border-[#315888] focus:ring-2 focus:ring-[#315888]/20 transition-all placeholder:text-luna-gray-light"
                  />
                </div>

                <div>
                  <label className="block text-luna-charcoal text-sm font-medium mb-1.5">
                    Como podemos ajudar? *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Conte um pouco sobre o seu filho e o que está buscando..."
                    className="w-full bg-[#FAFCFF] border border-[#315888]/20 rounded-xl px-4 py-3 text-luna-charcoal text-sm focus:outline-none focus:border-[#315888] focus:ring-2 focus:ring-[#315888]/20 transition-all placeholder:text-luna-gray-light resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#315888] text-white py-4 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-[#0A2B53] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                >
                  <Send size={16} />
                  {isSubmitting ? "Enviando..." : "Enviar mensagem"}
                </button>

                <p className="text-luna-gray text-xs text-center">
                  Ao enviar, sua mensagem será enviada e você continuará nesta página.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
