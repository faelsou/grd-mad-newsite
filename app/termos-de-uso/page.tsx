import type { Metadata } from "next";
import { PageIntro } from "@/components/PageIntro";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termos de uso",
  description: "Condições de uso do site da GRD MAD.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-[800px] px-5 py-16 md:px-8 md:py-24">
      <PageIntro
        eyebrow="SITE"
        title="Termos de uso."
        text="O site apresenta a fábrica para lojistas. Pedido, prazo e preço só valem depois da confirmação da GRD MAD."
      />
      <div className="mt-10 space-y-6 text-sm leading-relaxed text-[#d9d3c8] md:text-base">
        <p>
          Os prazos de 25 a 30 dias e a opção Express em 15 dias dependem da complexidade do projeto, das
          cores escolhidas e da confirmação de produção. A cortesia da licença Promob vale para novos
          lojistas nas faixas de pedido descritas na página inicial, mediante conferência dos pedidos
          faturados nos primeiros 30 dias.
        </p>
        <p>
          Fotos de ambientes ilustram o tipo de projeto que a fábrica produz. A cor, a ferragem e o
          acabamento de cada pedido seguem o arquivo Promob aprovado e o catálogo vigente.
        </p>
        <p>
          A garantia de 5 anos cobre defeitos de fabricação. Não cobre mau uso, umidade excessiva, alteração
          feita por terceiros nem desgaste natural de ferragens. A assistência técnica em até 7 dias depende
          de agenda e da região de atendimento.
        </p>
        <p>
          Dúvidas sobre estes termos: {site.email}. Foro da comarca de Cotia/SP.
        </p>
      </div>
    </main>
  );
}
