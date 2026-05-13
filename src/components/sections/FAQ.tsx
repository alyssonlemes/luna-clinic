const faqs = [
  {
    question: "Como saber se meu filho precisa de fisioterapia pediátrica?",
    answer:
      "Sinais como atraso para sentar, engatinhar ou andar, assimetrias posturais, torcicolo, prematuridade e dificuldades motoras podem indicar necessidade de avaliação com fisioterapeuta pediátrico.",
  },
  {
    question: "A LUNA atende apenas em Franca-SP?",
    answer:
      "A clínica fica em Franca-SP e recebe famílias da cidade e da região. O primeiro passo é agendar uma avaliação para entendermos as necessidades da criança.",
  },
  {
    question: "Quais casos vocês atendem na fisioterapia infantil?",
    answer:
      "Atendemos estimulação precoce, atraso motor, assimetrias cranianas e posturais, torcicolo congênito e outras demandas do desenvolvimento neuropsicomotor.",
  },
  {
    question: "Como funciona o agendamento da avaliação?",
    answer:
      "Você pode agendar pelo WhatsApp ou pelo formulário do site. A equipe entra em contato para confirmar horário e orientar os documentos necessários.",
  },
];

export default function FAQ() {
  return (
    <section id="perguntas-frequentes" className="py-24 bg-[#FAFCFF]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12 reveal">
          <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Dúvidas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-4">
            Perguntas sobre fisioterapia pediátrica em Franca-SP
          </h2>
          <p className="text-luna-gray leading-relaxed">
            Reunimos as respostas mais comuns para ajudar sua família a dar o próximo passo com segurança.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="reveal group bg-white rounded-2xl border border-[#315888]/15 p-5"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <summary className="cursor-pointer list-none font-semibold text-luna-charcoal flex items-center justify-between gap-3">
                <span>{faq.question}</span>
                <span className="text-[#315888] group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="text-luna-gray text-sm leading-relaxed mt-3">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
