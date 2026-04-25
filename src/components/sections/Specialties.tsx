const specialties = [
  {
    icon: "🧠",
    title: "Alterações Neurológicas e Genéticas",
    desc: "Atendimento especializado para crianças com condições como paralisia cerebral, síndrome de Down, autismo e outras alterações que impactam o desenvolvimento motor.",
    color: "bg-[#E8EEF5]",
    accent: "border-[#315888]/35",
  },
  {
    icon: "🏃",
    title: "Atraso no Desenvolvimento Motor",
    desc: "Identificação precoce e acompanhamento para crianças que apresentam atraso em marcos como sentar, engatinhar, andar ou outras habilidades motoras.",
    color: "bg-[#E3EBF4]",
    accent: "border-[#8BA5C4]/45",
  },
  {
    icon: "🔄",
    title: "Torcicolo Muscular",
    desc: "Tratamento eficaz para o torcicolo congênito ou adquirido, com abordagem gentil e efetiva, devolvendo mobilidade e qualidade de vida ao bebê.",
    color: "bg-[#EDF2F8]",
    accent: "border-[#315888]/25",
  },
  {
    icon: "👶",
    title: "Assimetria Craniana",
    desc: "Avaliação e tratamento da plagiocefalia e outras assimetrias do crânio de forma segura e não invasiva, acompanhando o crescimento do bebê.",
    color: "bg-[#EAF0F7]",
    accent: "border-[#0A2B53]/20",
  },
  {
    icon: "🌱",
    title: "Estimulação Precoce",
    desc: "Programa de estimulação baseado em evidências científicas para potencializar o desenvolvimento cognitivo, motor e sensorial nos primeiros anos de vida.",
    color: "bg-[#E8EEF5]",
    accent: "border-[#315888]/35",
  },
  {
    icon: "🫁",
    title: "Fisioterapia Respiratória Pediátrica",
    desc: "Suporte para crianças com secreção, chiado, bronquiolite, pneumonias de repetição e outras condições respiratórias, com técnicas seguras para melhorar a ventilação e o conforto respiratório.",
    color: "bg-[#EDF2F8]",
    accent: "border-[#0A2B53]/25",
  },
  {
    icon: "📚",
    title: "Mentorias e Consultorias",
    desc: "Orientação personalizada para famílias e profissionais da saúde, com suporte prático e emocional para quem cuida e acompanha o desenvolvimento infantil.",
    color: "bg-[#F5F8FC]",
    accent: "border-[#8BA5C4]/45",
  },
];

export default function Specialties() {
  const firstRow = specialties.slice(0, 4);
  const secondRow = specialties.slice(4);

  return (
    <section id="especialidades" className="py-24 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Áreas de atuação
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-4">
            Cuidado especializado para{" "}
            <em className="italic text-[#315888]">cada necessidade</em>
          </h2>
          <p className="text-luna-gray leading-relaxed">
            Trabalhamos com as principais demandas do desenvolvimento infantil,
            oferecendo tratamentos baseados em evidências e cheios de cuidado.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRow.map((s, i) => (
            <div
              key={s.title}
              className={`reveal group rounded-3xl p-7 ${s.color} border ${s.accent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-luna-charcoal text-lg mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-luna-gray text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {secondRow.map((s, i) => (
            <div
              key={s.title}
              className={`reveal group rounded-3xl p-7 ${s.color} border ${s.accent} hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default`}
              style={{ transitionDelay: `${(i + 4) * 60}ms` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {s.icon}
              </div>
              <h3 className="font-display font-semibold text-luna-charcoal text-lg mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-luna-gray text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
