export default function CTA() {
  return (
    <section className="py-24 bg-[#FAFCFF] overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative bg-gradient-to-br from-[#315888] via-[#3E6A9C] to-[#0A2B53] rounded-[2.5rem] overflow-hidden p-10 md:p-16 text-center">
          {/* Background decorations */}
          <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/10" />
          <div className="absolute -bottom-12 -right-12 w-44 h-44 rounded-full bg-white/10" />
          <div className="absolute top-8 right-16 w-6 h-6 rounded-full bg-white/20 animate-float" />
          <div className="absolute bottom-8 left-16 w-4 h-4 rounded-full bg-white/20 animate-float-slow" />

          <div className="relative z-10">
            <div className="text-5xl mb-5">🌙</div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white mb-5 leading-tight">
              O desenvolvimento do seu filho{" "}
              <br className="hidden md:block" />
              começa com{" "}
              <em className="italic font-accent">um passo</em>
            </h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Agende a avaliação inicial e deixe que a LUNA cuide do
              desenvolvimento do seu pequeno com todo o respeito e carinho que
              ele merece.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5516994403306?text=Olá!%20Quero%20agendar%20uma%20avaliação%20na%20LUNA."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-[#315888] px-8 py-4 rounded-full font-semibold text-base hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo WhatsApp
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 bg-[#8BA5C4]/20 backdrop-blur-sm text-white border border-[#8BA5C4]/45 px-8 py-4 rounded-full font-medium hover:bg-[#8BA5C4]/30 transition-all duration-200"
              >
                Enviar mensagem
              </a>
            </div>

            <p className="text-white/60 text-sm mt-6">
              Respondemos em até 24 horas • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
