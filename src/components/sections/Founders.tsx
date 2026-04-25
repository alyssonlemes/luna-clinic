const founders = [
  {
    name: "Mariana Lemes",
    title: "Fisioterapeuta Pediátrica",
    cref: "CREFITO-3 / 00000-F",
    photo: "/images/mariana.jpg",
    photoPosition: "center 24%",
    color: "from-[#E8EEF5] to-[#EDF2F8]",
    accent: "bg-[#315888]",
    bio: "Mariana é fisioterapeuta formada pela Universidade X, com pós-graduação em Fisioterapia Neuropediátrica. Atuou em hospitais de referência antes de fundar a LUNA, acumulando mais de 8 anos de experiência com crianças de diversas condições. Seu olhar clínico e sensível já transformou a vida de centenas de famílias.",
    tags: ["Neuropediatria", "Desenvolvimento Motor", "Estimulação Precoce"],
  },
  {
    name: "Evelyn Guilherme",
    title: "Fisioterapeuta Pediátrica",
    cref: "CREFITO-3 / 00001-F",
    photo: "/images/evelyn.JPG",
    photoPosition: "center 20%",
    color: "from-[#E3EBF4] to-[#EEF3F9]",
    accent: "bg-[#8BA5C4]",
    bio: "Evelyn se especializou em fisioterapia pediátrica após perceber, na prática, a enorme diferença que um acompanhamento qualificado e humano faz na vida das crianças. Com formação em Ortopedia Pediátrica e Terapia Manual, ela traz um olhar único e cuidadoso para cada atendimento na LUNA.",
    tags: ["Ortopedia Pediátrica", "Torcicolo", "Assimetria Craniana"],
  },
];

export default function Founders() {
  return (
    <section id="fundadoras" className="py-24 bg-[#F5F8FC]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 reveal">
          <span className="text-[#315888] text-sm font-semibold tracking-widest uppercase mb-3 block">
            Quem somos
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-luna-charcoal mb-4">
            As mentes e os{" "}
            <em className="italic text-[#315888]">corações</em> por trás da
            LUNA
          </h2>
          <p className="text-luna-gray leading-relaxed">
            Duas profissionais unidas pela paixão pelo desenvolvimento infantil e
            pelo desejo de fazer a diferença na vida das famílias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {founders.map((f, i) => (
            <div
              key={f.name}
              className={`reveal rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-300`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Photo area */}
              <div
                className={`bg-gradient-to-br ${f.color} h-64 md:h-72 flex items-center justify-center relative overflow-hidden`}
              >
                <img
                  src={f.photo}
                  alt={f.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: f.photoPosition }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B53]/35 via-[#0A2B53]/10 to-transparent" />
                <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-white/15" />
                <div className="absolute bottom-4 left-4 w-14 h-14 rounded-full bg-white/10" />
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                  <div className={`${f.accent} text-white text-xs px-3 py-1 rounded-full font-medium shadow-sm`}>
                    {f.cref}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="font-display text-2xl font-semibold text-luna-charcoal mb-1">
                  {f.name}
                </h3>
                <p className="text-[#315888] font-medium text-sm mb-4">
                  {f.title}
                </p>
                <p className="text-luna-gray text-sm leading-relaxed mb-5">
                  {f.bio}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#E8EEF5] text-[#315888] text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
