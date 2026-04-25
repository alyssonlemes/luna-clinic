import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#F5F8FC]">
      {/* Background decorative shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#E8EEF5] opacity-60" />
        <div className="absolute bottom-0 -left-24 w-[350px] h-[350px] rounded-full bg-[#EDF2F8] opacity-50" />
        <div className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full bg-[#E3EBF4] opacity-40" />
        {/* Floating dots */}
        <div className="absolute top-28 left-1/4 w-3 h-3 rounded-full bg-[#315888] opacity-50 animate-float" />
        <div className="absolute top-48 right-1/3 w-2 h-2 rounded-full bg-[#0A2B53] opacity-60 animate-float-slow" />
        <div className="absolute bottom-32 right-1/4 w-4 h-4 rounded-full bg-[#8BA5C4] opacity-40 animate-float" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left — copy */}
        <div>
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 bg-[#E8EEF5] border border-[#315888]/30 rounded-full px-4 py-1.5 mb-6 animate-fade-in">
            <Star size={13} className="text-[#315888] fill-[#315888]" />
            <span className="text-[#315888] text-xs font-medium tracking-wide">
              Fisioterapia Pediátrica Especializada
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.15] text-luna-charcoal mb-6 animate-fade-up">
            Clinica de fisioterapia pediatrica em{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[#0A2B53] via-[#315888] to-[#8BA5C4] bg-clip-text text-transparent">Franca-SP</span>
            </span>{" "}
            para o desenvolvimento infantil com{" "}
            <em className="font-accent italic not-italic text-[#315888]">
              respeito
            </em>{" "}
            e acolhimento
          </h1>

          <p className="text-luna-gray text-lg leading-relaxed mb-8 max-w-xl animate-fade-up animate-delay-200">
            Na LUNA, em Franca-SP, cada criança e unica. Acompanhamos cada fase
            da infancia com fisioterapia pediatrica especializada, tecnica,
            carinho e respeito ao tempo de cada pequeno.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animate-delay-300">
            <a
              href="https://wa.me/5516994403306?text=Olá!%20Quero%20agendar%20uma%20avaliação."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#315888] text-white px-8 py-4 rounded-full font-medium text-base hover:bg-[#0A2B53] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
            >
              Agendar avaliação
              <ArrowRight size={18} />
            </a>
            <a
              href="#sobre"
              className="inline-flex items-center justify-center gap-2 bg-white text-luna-charcoal border border-[#315888]/30 px-8 py-4 rounded-full font-medium text-base hover:border-[#315888] hover:shadow-sm transition-all duration-200"
            >
              Conhecer a LUNA
            </a>
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-5 mt-10 animate-fade-up animate-delay-400">
            <div className="flex -space-x-2">
              {["bg-[#315888]", "bg-[#0A2B53]", "bg-[#8BA5C4]"].map((c, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}
                >
                  {["M", "E", "A"][i]}
                </div>
              ))}
            </div>
            <div>
              <p className="text-luna-charcoal font-semibold text-sm">
                +150 famílias atendidas
              </p>
              <p className="text-luna-gray text-xs">com amor e cuidado</p>
            </div>
          </div>
        </div>

        {/* Right — illustration card */}
        <div className="relative flex justify-center animate-fade-in animate-delay-300">
          <div className="relative">
            {/* Main card */}
            <div className="w-[320px] md:w-[380px] h-[420px] md:h-[480px] bg-gradient-to-br from-[#E8EEF5] to-[#EDF2F8] rounded-[2.5rem] flex items-center justify-center shadow-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: "url('/images/capa-luna.jpeg')" }}
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2B53]/18 via-transparent to-transparent" />
              {/* Decorative inner shapes */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full bg-[#315888]/20" />
              <div className="absolute bottom-10 left-6 w-14 h-14 rounded-full bg-[#0A2B53]/25" />
            </div>

            {/* Floating info cards */}
            <div className="absolute -left-10 -top-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float-slow z-20">
              <div className="w-9 h-9 bg-[#E3EBF4] rounded-xl flex items-center justify-center text-lg">
                🌱
              </div>
              <div>
                <p className="text-luna-charcoal font-semibold text-xs">
                  Estimulação Precoce
                </p>
                <p className="text-luna-gray text-[10px]">Especialidade</p>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float z-20">
              <div className="w-9 h-9 bg-[#E8EEF5] rounded-xl flex items-center justify-center text-lg">
                💜
              </div>
              <div>
                <p className="text-luna-charcoal font-semibold text-xs">
                  Atendimento humanizado
                </p>
                <p className="text-luna-gray text-[10px]">Nossa essência</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 30C360 60 720 0 1080 30C1260 45 1380 35 1440 30V60H0V30Z"
            fill="#FAFCFF"
          />
        </svg>
      </div>
    </section>
  );
}
