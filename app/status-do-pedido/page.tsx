import type { Metadata } from "next";
import { OrderStatus } from "@/components/OrderStatus";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Status do pedido",
  description: "Consulte o andamento do seu pedido na fábrica GRD MAD.",
};

export default function StatusPage() {
  return (
    <main className="mx-auto max-w-[1180px] px-5 py-16 md:px-8 md:py-24">
      <PageIntro
        eyebrow="ACOMPANHAMENTO"
        title="Status do pedido."
        text="A produção é confirmada pela fábrica. Chame no WhatsApp e informe o número do pedido ou do projeto Promob para saber o estágio atual."
      />
      <OrderStatus />
    </main>
  );
}
