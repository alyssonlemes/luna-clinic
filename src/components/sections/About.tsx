export default function About() {
  return (
    <section id="sobre" className="py-24 bg-[#FAFCFF]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual */}
          <div className="reveal-left">
            <div className="relative">
              <div className="w-full max-w-[420px] h-[420px] rounded-[2rem] relative overflow-hidden shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/historia.JPG')" }}
                  aria-hidden="true"
                />
              </div>

              {/* Stats card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex gap-6">
                {[
                  { num: "150+", label: "Crianças atendidas" },
                  { num: "2", label: "Especialistas" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="font-display text-2xl font-bold text-[#315888]">
                      {s.num}
                    </p>
                    <p className="text-luna-gray text-xs mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="reveal">
            <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
              Nossa história
            </span>
            <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-6 leading-tight">
              Nascemos da{" "}
              <em className="italic text-[#315888]">paixão</em> pelo
              desenvolvimento infantil
            </h2>

            <p className="text-luna-gray leading-relaxed mb-5">
              A LUNA nasceu do encontro de duas fisioterapeutas que, além de
              colegas de profissão, compartilhavam o mesmo sonho: criar um espaço
              onde crianças pudessem se desenvolver sendo completamente respeitadas
              em seu tempo e em sua singularidade.
            </p>

            <p className="text-luna-gray leading-relaxed mb-5">
              Fundada em 2026 por{" "}
              <strong className="text-luna-charcoal">Mariana Lemes</strong> e{" "}
              <strong className="text-luna-charcoal">Evelyn Guilherme</strong>, a
              clínica surgiu da experiência prática e do olhar sensível de ambas
              para as reais necessidades das famílias — especialmente nos primeiros
              anos de vida das crianças.
            </p>

            <p className="text-luna-gray leading-relaxed mb-8">
              Nosso propósito vai além do tratamento: queremos que cada família que
              passa pela LUNA saia com mais confiança, mais informação e com a
              certeza de que seu filho está sendo cuidado com técnica, carinho e
              respeito absoluto.
            </p>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: "💡", title: "Técnica", desc: "Conhecimento atualizado" },
                { icon: "🤗", title: "Acolhimento", desc: "Presença e cuidado" },
                { icon: "🌱", title: "Respeito", desc: "Ao tempo de cada um" },
              ].map((v) => (
                <div
                  key={v.title}
                  className="bg-[#F5F8FC] rounded-2xl p-4 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-2xl mb-2">{v.icon}</div>
                  <p className="font-semibold text-luna-charcoal text-sm">
                    {v.title}
                  </p>
                  <p className="text-luna-gray text-xs mt-1">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
