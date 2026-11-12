"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/site";

export function OrderStatus() {
  const [order, setOrder] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (order.trim().length < 2) {
      setError("Informe o número do pedido ou do projeto Promob.");
      return;
    }
    if (contact.trim().length < 3) {
      setError("Informe o nome da loja ou o WhatsApp de cadastro.");
      return;
    }
    setError("");
    const message = `Olá, quero o status do pedido.\nPedido/projeto: ${order.trim()}\nLoja ou WhatsApp: ${contact.trim()}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={onSubmit} className="gold-ring mt-10 max-w-xl rounded-[28px] bg-card p-6 md:p-8" noValidate>
      <label className="block text-sm text-[#d9d3c8]">
        Número do pedido ou do projeto
        <input
          value={order}
          onChange={(event) => setOrder(event.target.value)}
          placeholder="Ex.: 1842 ou ambiente Cozinha"
          className="mt-2 w-full rounded-xl border border-white/10 bg-[#0e0d0b] px-4 py-3 text-[#f6f1e8] outline-none focus:border-gold"
        />
      </label>
      <label className="mt-4 block text-sm text-[#d9d3c8]">
        Loja ou WhatsApp de cadastro
        <input
          value={contact}
          onChange={(event) => setContact(event.target.value)}
          placeholder="Ex.: Casa Prime ou (11) 90000-0000"
          className="mt-2 w-full rounded-xl border border-white/10 bg-[#0e0d0b] px-4 py-3 text-[#f6f1e8] outline-none focus:border-gold"
        />
      </label>
      {error && (
        <p className="mt-4 text-sm text-[#f0c45c]" role="alert">
          {error}
        </p>
      )}
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-medium text-[#1a1408] hover:bg-[#f0c45c]"
      >
        Consultar no WhatsApp
      </button>
      <ol className="mt-8 space-y-3 text-sm text-muted">
        <li>1. Pedido recebido e conferido no Promob</li>
        <li>2. Corte CNC e fita com cola PUR</li>
        <li>3. Montagem de caixas e gavetas</li>
        <li>4. Pronto para retirada ou entrega</li>
      </ol>
    </form>
  );
}
