const steps = [
  {
    number: "01",
    icon: "📋",
    title: "Avaliação inicial",
    desc: "Tudo começa com uma conversa. Na primeira consulta, conhecemos a criança, ouvimos a família e realizamos uma avaliação completa do desenvolvimento motor, identificando necessidades e potencialidades.",
    color: "bg-[#E8EEF5]",
    accent: "text-[#315888]",
  },
  {
    number: "02",
    icon: "🗺️",
    title: "Plano de tratamento",
    desc: "A partir da avaliação, criamos um plano terapêutico individualizado — feito sob medida para o seu filho. Definimos objetivos claros, técnicas e a frequência de atendimentos mais adequada.",
    color: "bg-[#E3EBF4]",
    accent: "text-[#315888]",
  },
  {
    number: "03",
    icon: "🤸",
    title: "Atendimento e evolução",
    desc: "O tratamento acontece em sessões lúdicas e envolventes, onde a criança aprende brincando. Utilizamos técnicas baseadas em evidências, sempre respeitando o ritmo e o prazer de cada paciente.",
    color: "bg-[#EDF2F8]",
    accent: "text-[#315888]",
  },
  {
    number: "04",
    icon: "📈",
    title: "Acompanhamento familiar",
    desc: "Você não está sozinho nessa jornada. Orientamos as famílias com exercícios para casa, tiramos dúvidas e celebramos cada conquista — porque cada passo dado pelo seu filho também é vitória de vocês.",
    color: "bg-[#EAF0F7]",
    accent: "text-[#0A2B53]",
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-[#FAFCFF]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Como funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-4">
            Da primeira consulta ao{" "}
            <em className="italic text-[#315888]">acompanhamento contínuo</em>
          </h2>
          <p className="text-luna-gray leading-relaxed">
            Entendemos que cada família chega com dúvidas e anseios. Por isso,
            nosso processo foi pensado para ser claro, acolhedor e transparente
            do início ao fim.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[#315888]/30 via-[#8BA5C4]/35 to-[#0A2B53]/30" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="reveal flex flex-col items-center text-center h-full"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Icon circle */}
                <div
                  className={`relative w-20 h-20 aspect-square shrink-0 rounded-full ${step.color} flex items-center justify-center mb-5 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-200`}
                >
                  <span className="text-3xl">{step.icon}</span>
                  <span
                    className={`absolute -top-2 -right-2 w-7 h-7 aspect-square shrink-0 rounded-full bg-white border-2 border-current ${step.accent} text-[11px] font-bold flex items-center justify-center shadow-sm`}
                  >
                    {step.number}
                  </span>
                </div>

                <div className={`rounded-2xl ${step.color} p-6 w-full h-full min-h-[260px] flex flex-col`}>
                  <h3 className="font-display font-semibold text-luna-charcoal text-lg mb-3">
                    {step.title}
                  </h3>
                  <p className="text-luna-gray text-sm leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14 reveal">
          <p className="text-luna-gray mb-5">
            Pronto para dar o primeiro passo?
          </p>
          <a
            href="https://wa.me/5516994403306?text=Olá!%20Quero%20agendar%20uma%20avaliação%20inicial."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#315888] text-white px-8 py-4 rounded-full font-medium hover:bg-[#0A2B53] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Agendar avaliação inicial
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
