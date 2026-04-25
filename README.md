# 🌙 LUNA — Centro de Desenvolvimento Infantil

Landing page completa para a **LUNA**, clínica de fisioterapia pediátrica fundada por Mariana Lemes e Evelyn Guilherme.

## 🛠 Stack

- **Next.js 13.5.6** (App Router)
- **TypeScript 5**
- **Tailwind CSS 3.3**
- **Lucide React** (ícones)
- **Resend** (envio de e-mail dos formulários)
- **Babel** (compilador — SWC desativado para compatibilidade Windows)
- Google Fonts: Playfair Display · DM Sans · Cormorant Garamond

---

## ⚡ Como rodar (passo a passo)

### Pré-requisitos
- **Node.js 18 LTS** ou superior → https://nodejs.org/
- npm (já vem com o Node)

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em desenvolvimento
```bash
npm run dev
```
Acesse **http://localhost:3000** no navegador.

### Configurar e-mail (Resend)
1. Copie `.env.example` para `.env.local`
2. Preencha `RESEND_API_KEY` com a chave da sua conta Resend
3. (Opcional) Ajuste `CONTACT_TO_EMAIL` e `CONTACT_FROM_EMAIL`

No plano gratuito, você pode começar com `onboarding@resend.dev` como remetente.

### 3. Build de produção
```bash
npm run build
npm start
```

---

## 🪟 Windows — Problema com Windows Defender / SWC

Este projeto já vem configurado para **não usar o compilador SWC nativo** do Next.js,
que é o binário que o Windows Defender bloqueia com a mensagem:

> *"next-swc.win32-x64-msvc.node — parte deste aplicativo foi bloqueada"*

### O que foi feito para resolver:
| Arquivo | Configuração |
|---|---|
| `.babelrc` | `{ "presets": ["next/babel"] }` — força Babel, ignora SWC |
| `next.config.js` | `swcMinify: false` — desativa minificação via SWC |
| `package.json` | Next.js **13.5.6** — versão com melhor compatibilidade Windows |

### Se ainda aparecer o aviso:
1. Abra **Windows Security** → *Proteção contra vírus e ameaças* → *Exclusões*
2. Adicione a pasta do projeto como exclusão
3. Rode `npm run dev` novamente

---

## 📁 Estrutura de pastas

```
luna-clinic/
├── .babelrc                        ← desativa SWC (fix Windows Defender)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── src/
    ├── app/
    │   ├── globals.css             ← estilos globais + animações CSS
    │   ├── layout.tsx              ← metadata SEO (title, description, OG)
    │   └── page.tsx                ← composição de todas as seções
    └── components/
        ├── sections/
        │   ├── Hero.tsx            ← Hero com CTA e cards flutuantes
        │   ├── About.tsx           ← História da clínica
        │   ├── Specialties.tsx     ← 6 áreas de atuação
        │   ├── Differentials.tsx   ← 4 diferenciais
        │   ├── Founders.tsx        ← Mariana e Evelyn
        │   ├── HowItWorks.tsx      ← 4 etapas do atendimento
        │   ├── Testimonials.tsx    ← 3 depoimentos + barra de trust
        │   ├── CTA.tsx             ← Seção de conversão
        │   └── Contact.tsx         ← Formulário → E-mail (Resend) + WhatsApp + mapa
        └── ui/
            ├── Navbar.tsx          ← Navbar fixa responsiva
            ├── Footer.tsx          ← Footer completo
            ├── WhatsAppButton.tsx  ← Botão flutuante com pulso
            └── ScrollReveal.tsx    ← Animações via IntersectionObserver
```

---

## ✏️ Customizações essenciais

### 1. Número de WhatsApp
Troque **`5500000000000`** pelo número real (com DDI) nos arquivos:
- `src/components/ui/Navbar.tsx`
- `src/components/ui/WhatsAppButton.tsx`
- `src/components/sections/Hero.tsx`
- `src/components/sections/HowItWorks.tsx`
- `src/components/sections/CTA.tsx`
- `src/components/sections/Contact.tsx`
- `src/components/sections/Differentials.tsx`

### 2. Endereço e contato
Edite `src/components/sections/Contact.tsx` e `src/components/ui/Footer.tsx`.

### 5. Formulário por e-mail (Resend)
- Endpoint: `src/app/api/contact/route.ts`
- Variáveis: `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`

### 3. CREFITO das fundadoras
Edite `src/components/sections/Founders.tsx` — campo `cref`.

### 4. SEO
Edite `src/app/layout.tsx` → objeto `metadata`.

---

## 🎨 Paleta de cores (Tailwind tokens)

| Token | Hex | Uso |
|---|---|---|
| `luna-lilac` | `#C8B4E8` | Cor principal, CTAs |
| `luna-lilac-soft` | `#F3EEFF` | Backgrounds suaves |
| `luna-rose` | `#F5D0D0` | Detalhes rosé |
| `luna-sage` | `#C5DDD0` | Verde sálvia |
| `luna-peach` | `#F5C9A7` | Pêssego |
| `luna-cream` | `#FDF8F2` | Fundo seções |
| `luna-charcoal` | `#2D2D2D` | Texto principal |

---

## 🚀 Deploy (Vercel — recomendado)

```bash
npx vercel
```
Zero configuração para Next.js. Deploy em menos de 2 minutos.

---

Desenvolvido com 💜 para a LUNA — Centro de Desenvolvimento Infantil
