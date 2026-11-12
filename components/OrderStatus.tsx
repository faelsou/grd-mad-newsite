import { whatsappLink } from "@/lib/site";

export function OrderStatus() {
  return (
    <div className="gold-ring mt-10 max-w-xl rounded-[28px] bg-card p-6 md:p-8">
      <a
        href={whatsappLink("Olá, quero consultar o status de um pedido na GRD MAD.")}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-full bg-gold py-3.5 text-sm font-medium text-[#1a1408] hover:bg-[#f0c45c]"
      >
        Consultar no WhatsApp
      </a>
      <ol className="mt-8 space-y-3 text-sm text-muted">
        <li>1. Pedido recebido e conferido no Promob</li>
        <li>2. Corte CNC e fita com cola PUR</li>
        <li>3. Montagem de caixas e gavetas</li>
        <li>4. Pronto para retirada ou entrega</li>
      </ol>
    </div>
  );
}
