import { Arrow, Check, ClockIcon, CubeIcon, PeopleIcon, Play } from "@/components/Icons";
import { FaqList } from "@/components/FaqList";
import { Portfolio } from "@/components/Portfolio";
import { differentials, novelties, partners, site, steps, whatsappLink } from "@/lib/site";

const icons = {
  clock: ClockIcon,
  cube: CubeIcon,
  people: PeopleIcon,
};

const stats = [
  { value: "2014", label: "no mercado de planejados" },
  { value: "1.200 m²", label: "de parque fabril com CNC" },
  { value: "2.000+", label: "chapas cortadas por mês" },
  { value: "5 anos", label: "de garantia de fabricação" },
];

const heroCards = [
  { value: "15 dias", label: "opção Express" },
  { value: "5 anos", label: "de garantia" },
  { value: "100% MDF", label: "em todas as peças" },
  { value: "Promob", label: "licença cortesia" },
];

export default function Home() {
  const maps = `https://maps.google.com/maps?q=${encodeURIComponent(site.address.mapsQuery)}&z=16&output=embed`;

  return (
    <main>
      <section className="relative isolate min-h-[92svh] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/kitchen-dark.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-[center_40%] brightness-[0.55] saturate-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/50" />

        <div className="relative mx-auto flex min-h-[92svh] max-w-[1180px] flex-col justify-end px-5 pb-16 pt-16 md:justify-center md:px-8 md:py-24">
          <p className="text-[11px] font-medium tracking-[0.18em] text-gold md:text-xs md:tracking-[0.22em]">
            <span className="md:hidden">FÁBRICA · DESDE 2014</span>
            <span className="hidden md:inline">FÁBRICA DE MÓVEIS PLANEJADOS · DESDE 2014</span>
          </p>
          <h1 className="mt-4 max-w-[14ch] font-serif text-[2.65rem] leading-[1.02] tracking-[-0.02em] text-[#f7f3ec] md:max-w-[19.5ch] md:text-6xl lg:text-[4.4rem]">
            A fábrica por trás de lojistas que entregam no prazo.
          </h1>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#ddd6cb] md:text-lg">
            <span className="md:hidden">
              Você projeta no Promob, nós entregamos caixas e gavetas montadas em 25 a 30 dias.
            </span>
            <span className="hidden md:inline">
              Você projeta no Promob, nós cortamos em CNC, fitamos com cola PUR e entregamos caixas e
              gavetas montadas em 25 a 30 dias, em toda a Grande SP.
            </span>
          </p>

          <div className="mt-8 hidden flex-wrap items-center gap-3 md:flex">
            <a
              href={whatsappLink("Olá, quero ser revendedor da GRD MAD.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-[#1a1408] transition hover:bg-[#f0c45c]"
            >
              Quero ser revendedor <Arrow />
            </a>
            <a
              href={site.catalog}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm text-[#f6f1e8] transition hover:border-gold hover:text-gold"
            >
              Baixar catálogo de cores 2026
            </a>
          </div>

          <ul className="mt-6 hidden flex-wrap gap-x-6 gap-y-2 text-sm text-[#ddd6cb] md:flex">
            {["Express em 15 dias", "Garantia de 5 anos", "100% MDF", "Promob próprio"].map((item) => (
              <li key={item} className="inline-flex items-center gap-2">
                <Check />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-2 gap-3 md:hidden">
            {heroCards.map((card) => (
              <div key={card.value} className="rounded-2xl border border-white/10 bg-black/55 px-4 py-4 backdrop-blur-sm">
                <p className="font-serif text-2xl text-gold">{card.value}</p>
                <p className="mt-1 text-sm text-[#ddd6cb]">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#0e0d0b]" aria-label="Números da fábrica">
        <div className="mx-auto grid max-w-[1180px] gap-8 px-5 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="font-serif text-4xl text-gold md:text-5xl">{stat.value}</p>
              <p className="mt-2 max-w-[16ch] text-sm text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink px-5 py-16 md:px-8 md:py-20">
        <div className="gold-ring mx-auto grid max-w-[1180px] gap-10 rounded-[28px] bg-[#100f0c] p-6 md:grid-cols-[1.4fr_0.8fr] md:p-10 lg:p-12">
          <div>
            <p className="text-[12px] font-medium tracking-[0.2em] text-gold">BENEFÍCIO PARA NOVOS LOJISTAS</p>
            <h2 className="mt-3 max-w-lg font-serif text-3xl leading-tight text-[#f7f2ea] md:text-[2.6rem]">
              Sua licença Promob anual por nossa conta.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
              Implantou a partir de R$ 25.000 em pedidos nos primeiros 30 dias? A licença anual sai como
              cortesia. Entre R$ 10.000 e R$ 24.900, pagamos 50%.
            </p>
          </div>
          <div className="flex flex-col justify-center gap-3">
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-black/40 px-4 py-3">
              <p className="text-sm text-[#d9d3c8]">
                R$ 25 mil ou
                <br />
                mais
              </p>
              <p className="text-right text-sm font-medium text-gold">
                100% da
                <br />
                licença
              </p>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-2xl bg-black/40 px-4 py-3">
              <p className="text-sm text-[#d9d3c8]">R$ 10 a 24,9 mil</p>
              <p className="text-right text-sm font-medium text-gold">50% da licença</p>
            </div>
            <a
              href={whatsappLink("Olá, quero aproveitar a licença Promob da GRD MAD.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 rounded-full bg-gold py-3 text-center text-sm font-medium text-[#1a1408] transition hover:bg-[#f0c45c]"
            >
              Quero aproveitar
            </a>
          </div>
        </div>
      </section>

      <section id="como-funciona" className="bg-cream px-5 py-20 text-ink md:px-8 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[12px] font-medium tracking-[0.22em] text-gold-deep">COMO FUNCIONA</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.08] md:text-5xl">
            Do Promob à sua loja em 5 passos.
          </h2>
          <p className="mt-4 max-w-xl text-ink-soft">
            Sem retrabalho: você envia o projeto, nós cuidamos da produção e avisamos quando está pronto
            para retirar ou entregar.
          </p>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step) => (
              <li key={step.n} className="rounded-3xl bg-paper p-5 shadow-[0_10px_30px_rgba(40,30,10,0.05)]">
                <p className="font-serif text-3xl text-gold-deep">{step.n}</p>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="diferenciais" className="bg-ink px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <p className="text-[12px] font-medium tracking-[0.22em] text-gold">DIFERENCIAIS</p>
          <h2 className="mt-3 max-w-2xl font-serif text-4xl leading-[1.08] text-[#f7f2ea] md:text-5xl">
            O que o seu cliente final percebe — e o que só você percebe.
          </h2>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {differentials.map((block) => {
              const Icon = icons[block.icon];
              return (
                <article key={block.title} className="rounded-3xl border border-white/10 bg-card p-6 md:p-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 text-gold">
                    <Icon />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-[#f6f1e8]">{block.title}</h3>
                  <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="fabrica" className="bg-[#0e0d0b] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1180px] items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-medium tracking-[0.22em] text-gold">A FÁBRICA</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] text-[#f7f2ea] md:text-5xl">
              Venha ver de perto. A porta está aberta.
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted md:text-base">
              1.200 m² em São Paulo, no Jardim Arpoador, com centro de furação CNC e linha própria de
              montagem. Empresa familiar, gerida pelos mesmos donos desde 2014.
            </p>
            <p className="mt-8 text-sm font-medium text-[#f6f1e8]">Novidades da linha</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {novelties.map((item) => (
                <li key={item} className="rounded-full border border-white/15 px-3 py-1.5 text-sm text-[#d9d3c8]">
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={whatsappLink("Olá, quero agendar uma visita à fábrica da GRD MAD.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-full border border-white/25 px-5 py-3 text-sm text-[#f6f1e8] transition hover:border-gold hover:text-gold"
            >
              Agendar visita à fábrica
            </a>
          </div>

          <div className="grid gap-4">
            <div className="stripe relative flex aspect-[16/9] items-end rounded-3xl border border-dashed border-white/20 p-5">
              <span className="absolute left-1/2 top-1/2 inline-flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold/70 text-gold">
                <Play />
              </span>
              <p className="max-w-sm text-sm text-[#cfc6b6]">
                Vídeo real de 30s: CNC cortando, coladeira PUR, caixas sendo embaladas
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="stripe flex aspect-[4/3] items-end rounded-3xl border border-dashed border-white/20 p-4 text-sm text-[#cfc6b6]">
                Foto real: centro de furação CNC
              </div>
              <div className="stripe flex aspect-[4/3] items-end rounded-3xl border border-dashed border-white/20 p-4 text-sm text-[#cfc6b6]">
                Foto real: caixas montadas e embaladas
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      <section className="bg-cream px-5 py-20 text-ink md:px-8 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[12px] font-medium tracking-[0.22em] text-gold-deep">QUEM JÁ PRODUZ COM A GENTE</p>
              <h2 className="mt-3 font-serif text-4xl md:text-5xl">Palavra de lojista.</h2>
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("GRD MAD " + site.address.mapsQuery)}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 self-start rounded-2xl bg-paper px-4 py-3 shadow-sm"
            >
              <span className="font-serif text-lg text-ink">Google</span>
              <span className="text-left text-xs leading-snug text-ink-soft">
                Avaliações da fábrica
                <br />
                em São Paulo
              </span>
            </a>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <article className="stripe flex min-h-64 flex-col justify-between rounded-3xl border border-dashed border-[#cfc6b4] bg-[#efe8da] p-6 text-[#5c564c]">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-gold-deep/50 text-gold-deep">
                <Play />
              </span>
              <div>
                <p className="text-sm">Vídeo de 30s com um lojista parceiro</p>
                <p className="mt-3 text-sm text-ink">Nome · loja · cidade · há quanto tempo compra da GRD MAD</p>
              </div>
            </article>
            {[
              {
                quote: "O prazo de 25 a 30 dias é o que a loja consegue combinar com o cliente final.",
                topic: "Prazo",
              },
              {
                quote: "Caixa montada, fita com cola PUR e peça etiquetada são o que aparece na entrega.",
                topic: "Acabamento",
              },
            ].map((item) => (
              <article key={item.topic} className="flex min-h-64 flex-col justify-between rounded-3xl bg-paper p-6 shadow-sm">
                <p className="font-serif text-xl italic leading-snug text-ink md:text-[1.35rem]">“{item.quote}”</p>
                <div className="mt-8 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-cream-deep" />
                  <div>
                    <p className="text-sm font-medium">{item.topic}</p>
                    <p className="text-sm text-ink-soft">O que os lojistas mais comentam</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-ink px-5 py-16 md:px-8" aria-label="Fornecedores">
        <div className="mx-auto max-w-[1180px] text-center">
          <p className="text-[11px] font-medium tracking-[0.22em] text-muted">
            MATÉRIA-PRIMA E FERRAGENS DE QUEM É REFERÊNCIA
          </p>
          <ul className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-8">
            {partners.map(({ name, logo }) => (
              <li key={name} className="flex h-10 items-center justify-center">
                <img
                  src={logo}
                  alt={name}
                  loading="lazy"
                  className="max-h-full max-w-[120px] object-contain opacity-55 brightness-0 invert transition-opacity hover:opacity-90"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="duvidas" className="bg-ink px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[12px] font-medium tracking-[0.22em] text-gold">DÚVIDAS FREQUENTES</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] text-[#f7f2ea] md:text-5xl">
              Antes de mandar o primeiro pedido.
            </h2>
          </div>
          <FaqList />
        </div>
      </section>

      <section id="revendedor" className="bg-[#14120f] px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-[12px] font-medium tracking-[0.22em] text-gold">SEJA REVENDEDOR</p>
            <h2 className="mt-3 font-serif text-4xl leading-[1.08] text-[#f7f2ea] md:text-5xl">
              Vamos produzir o próximo projeto da sua loja?
            </h2>
            <dl className="mt-10 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-gold">Endereço</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#d9d3c8]">
                  {site.address.street}
                  <br />
                  {site.address.district}
                  <br />
                  CEP {site.address.cep}
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gold">Horário</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#d9d3c8]">{site.hours}</dd>
              </div>
              <div>
                <dt className="text-sm text-gold">WhatsApp</dt>
                <dd className="mt-2 text-sm">
                  <a
                    className="text-[#f6f1e8] underline-offset-4 hover:underline"
                    href={whatsappLink("Olá, quero ser revendedor da GRD MAD.")}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {site.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm text-gold">E-mail</dt>
                <dd className="mt-2 text-sm">
                  <a className="text-[#f6f1e8] underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </dd>
              </div>
            </dl>
            <div className="mt-8 overflow-hidden rounded-3xl border border-dashed border-white/15">
              <iframe
                title="Mapa — Rua Frei Liberato de Gries, 501, São Paulo"
                src={maps}
                className="h-64 w-full grayscale"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <a
            href={whatsappLink("Olá, quero ser revendedor da GRD MAD.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-fit items-center justify-center self-center rounded-full bg-gold px-8 py-3.5 text-sm font-medium text-[#1a1408] transition hover:bg-[#f0c45c] max-lg:w-full"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Manufacturer",
            name: "GRD MAD",
            description: site.description,
            email: site.email,
            telephone: `+${site.phoneE164}`,
            address: {
              "@type": "PostalAddress",
              streetAddress: site.address.street,
              addressLocality: site.address.city,
              addressRegion: "SP",
              postalCode: site.address.cep,
              addressCountry: "BR",
            },
          }),
        }}
      />
    </main>
  );
}
