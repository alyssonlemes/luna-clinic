const testimonials = [
  {
    name: "João Vieira",
    stars: 5,
    emoji: "👨",
    color: "bg-[#E8EEF5]",
    text: "A Luna oferece um ambiente cuidadosamente planejado, que transmite conforto e segurança. A equipe é extremamente qualificada, atenciosa e dedicada, proporcionando um atendimento humanizado e de elevada qualidade"
  },
  {
    name: "Maria Eduarda Dionízio",
    stars: 5,
    emoji: "👨‍👩‍👦",
    color: "bg-[#E3EBF4]",
    text: "Um espaço acolhedor e cuidadosamente planejado para melhor atender nossos filhos, tudo pensado no conforto e praticidade para os pequenos. Eu indico de olhos fechados, o centro de desenvolvimento infantil Luna é um lugar incrível, com profissionais extremamente qualificadas e atenciosas, que estão sempre em constante evolução para oferecer um atendimento único para cada criança!",
  },
  {
    name: "Vanessa Lemes",
    stars: 5,
    emoji: "👩",
    color: "bg-[#EDF2F8]",
    text: "Espaço maravilhoso, super acolhedor. E as profissionais são super dedicadas. Recomendo demais.",
  },
];

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-24 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Depoimentos
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-4">
            O que as famílias{" "}
            <em className="italic text-[#315888]">falam da LUNA</em>
          </h2>
          <p className="text-luna-gray leading-relaxed">
            Cada história é única. Cada conquista, nossa maior recompensa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal rounded-3xl ${t.color} p-7 h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <span key={j} className="text-[#315888] text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-luna-dark-soft text-sm leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-6">
                <div className="w-10 h-10 rounded-full bg-white/70 flex items-center justify-center text-xl shadow-sm">
                  {t.emoji}
                </div>
                <div>
                  <p className="font-semibold text-luna-charcoal text-sm">
                    {t.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
