import { Instagram, Heart } from "lucide-react";

const quickLinks = [
  { label: "Sobre a Clinica", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Fundadoras", href: "#fundadoras" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Perguntas Frequentes", href: "#perguntas-frequentes" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2B53] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#315888] to-[#8BA5C4] flex items-center justify-center">
                <span className="text-white text-base leading-none" aria-hidden="true">🌙</span>
              </div>
              <div>
                <span className="font-display font-semibold text-white text-lg leading-none block">
                  LUNA
                </span>
                <span className="text-luna-gray-light text-[10px] tracking-widest uppercase leading-none">
                  Desenvolvimento Infantil
                </span>
              </div>
            </div>
            <p className="text-luna-gray-light text-sm leading-relaxed">
              Acolhendo cada criança com respeito, técnica e muito carinho.
              Porque cada pequeno passo importa.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="https://www.instagram.com/luna.fisioped?igsh=b2lveHFqMjA4dmRk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#315888] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
                {quickLinks.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-luna-gray-light text-sm hover:text-[#8BA5C4] transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4">
              Contato
            </h4>
            <ul className="space-y-3 text-luna-gray-light text-sm">
              <li>
                📍
                <a
                  href="https://www.google.com/maps/search/?api=1&query=R.%20Ant%C3%B4nio%20T%C3%B4rres%20Penedo%2C%20460%20-%20S%C3%A3o%20Joaquim%2C%20Franca%20-%20SP%2C%2014406-352"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 hover:text-white transition-colors"
                >
                  R. Antonio Torres Penedo, 460 - Sao Joaquim, Franca - SP
                </a>
              </li>
              <li>
                📞
                <a href="tel:+5516994403306" className="ml-1 hover:text-white transition-colors">
                  +55 16 99440-3306
                </a>
              </li>
              <li>
                ✉️
                <a href="mailto:desenvolvimento.luna@gmail.com" className="ml-1 hover:text-white transition-colors">
                  desenvolvimento.luna@gmail.com
                </a>
              </li>
              <li>🕐 Seg–Sex: 8h às 18h | Sáb: 8h às 12h</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-luna-gray-light text-xs">
          <p>© {year} LUNA - Centro de Desenvolvimento Infantil. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Feito com <Heart size={12} className="text-[#8BA5C4] fill-[#8BA5C4]" /> para as crianças e suas famílias
          </p>
        </div>
      </div>
    </footer>
  );
}
