const differentials = [
  {
    icon: "🤝",
    title: "Atendimento humanizado",
    desc: "Cada família é recebida com escuta ativa, presença e acolhimento. Porque por trás de cada diagnóstico, há uma criança e uma família que precisam se sentir seguros.",
    cardClass: "bg-[#E8EEF5] border border-[#315888]/30",
  },
  {
    icon: "🎓",
    title: "Profissionais especializadas",
    desc: "Mariana e Evelyn são fisioterapeutas com formação específica em pediatria, em constante atualização para oferecer o que há de melhor em evidências científicas.",
    cardClass: "bg-[#E3EBF4] border border-[#8BA5C4]/35",
  },
  {
    icon: "🏡",
    title: "Ambiente acolhedor",
    desc: "A LUNA foi pensada para que crianças se sintam em casa — um espaço colorido, seguro, sensorial e feito para brincar enquanto se desenvolve.",
    cardClass: "bg-[#EDF2F8] border border-[#315888]/25",
  },
  {
    icon: "⏰",
    title: "Respeito ao tempo individual",
    desc: "Não existe um único cronograma de desenvolvimento. Cada criança tem seu ritmo — e aqui, esse ritmo é celebrado, não apressado.",
    cardClass: "bg-[#EAF0F7] border border-[#0A2B53]/20",
  },
];

export default function Differentials() {
  return (
    <section className="py-24 bg-[#FAFCFF] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left — text */}
          <div className="reveal-left">
            <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Por que a LUNA?
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-6 leading-tight">
              O que nos torna{" "}
              <em className="italic text-[#315888]">diferentes</em>
            </h2>
            <p className="text-luna-gray leading-relaxed mb-8">
              Mais do que uma clínica de fisioterapia, a LUNA é um espaço de
              cuidado integral. Nossa abordagem combina a mais alta qualidade
              técnica com um ambiente que acolhe tanto as crianças quanto as
              famílias.
            </p>

            <a
              href="https://wa.me/5516994403306"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#315888] text-white px-7 py-3.5 rounded-full font-medium hover:bg-[#0A2B53] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Quero saber mais
              <span>→</span>
            </a>
          </div>

          {/* Right — cards 2x2 */}
          <div className="grid grid-cols-2 gap-5">
            {differentials.map((d, i) => (
              <div
                key={d.title}
                className={`reveal rounded-3xl p-6 ${d.cardClass} hover:shadow-md hover:-translate-y-1 transition-all duration-300`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-3xl mb-3">{d.icon}</div>
                <h3 className="font-display font-semibold text-luna-charcoal text-base mb-2">
                  {d.title}
                </h3>
                <p className="text-luna-gray text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
