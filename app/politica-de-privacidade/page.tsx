import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description: "Como a GRD MAD trata os dados enviados pelo site.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[800px] px-5 py-16 md:px-8 md:py-24">
      <PageIntro
        eyebrow="LGPD"
        title="Política de privacidade."
        text="Esta página explica o que fazemos com os dados que você envia para falar com a fábrica."
      />
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-[#d9d3c8] md:text-base">
        <p>
          A GRD MAD, CNPJ {site.cnpj}, com fábrica em {site.address.street}, {site.address.district}, não
          coleta dados por formulário neste site. O contato acontece pelo WhatsApp {site.phoneDisplay}.
        </p>
        <p>
          A conversa fica no histórico do WhatsApp, conforme as regras da plataforma. Usamos o que você
          envia por lá somente para retornar o contato, avaliar o cadastro de lojista e acompanhar pedidos.
          Não vendemos listas e não usamos os dados para publicidade de terceiros. O catálogo de cores é um
          arquivo público para download.
        </p>
        <p>
          Você pode pedir acesso, correção ou exclusão dos dados pelo e-mail {site.email} ou pelo WhatsApp{" "}
          {site.phoneDisplay}. Guardamos o histórico de atendimento pelo tempo necessário para a relação
          comercial e para obrigações legais.
        </p>
      </div>
    </main>
  );
}
