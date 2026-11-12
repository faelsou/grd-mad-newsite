"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { whatsappLink } from "@/lib/site";

const fields = [
  { name: "nome", label: "Seu nome", placeholder: "Ex.: Caroline Prieto" },
  { name: "loja", label: "Nome da loja", placeholder: "Ex.: Casa Prime Planejados" },
  { name: "cidade", label: "Cidade", placeholder: "Ex.: Osasco" },
  { name: "whatsapp", label: "WhatsApp", placeholder: "(11) 90000-0000" },
] as const;

type Values = Record<(typeof fields)[number]["name"], string>;

const empty: Values = { nome: "", loja: "", cidade: "", whatsapp: "" };

export function ResellerForm() {
  const [values, setValues] = useState<Values>(empty);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const missing = fields.find((field) => values[field.name].trim().length < 2);
    if (missing) {
      setError(`Preencha ${missing.label.toLowerCase()}.`);
      setSent(false);
      return;
    }
    const digits = values.whatsapp.replace(/\D/g, "");
    if (digits.length < 10) {
      setError("Informe um WhatsApp com DDD.");
      setSent(false);
      return;
    }
    setError("");
    const message = `Olá, quero ser revendedor da GRD MAD.\nNome: ${values.nome}\nLoja: ${values.loja}\nCidade: ${values.cidade}\nWhatsApp: ${values.whatsapp}`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <form onSubmit={onSubmit} className="rounded-[28px] bg-[#14120e] p-6 gold-ring md:p-8" noValidate>
      <h3 className="font-serif text-2xl text-[#f7f2ea] md:text-[28px]">Prefere que a gente chame você?</h3>
      <div className="mt-6 space-y-4">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm text-[#d9d3c8]">
            {field.label}
            <input
              name={field.name}
              value={values[field.name]}
              placeholder={field.placeholder}
              autoComplete={field.name === "nome" ? "name" : field.name === "whatsapp" ? "tel" : "organization"}
              onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
              className="mt-2 w-full rounded-xl border border-white/10 bg-[#0e0d0b] px-4 py-3 text-[#f6f1e8] outline-none transition focus:border-gold"
            />
          </label>
        ))}
      </div>
      {error && (
        <p className="mt-4 text-sm text-[#f0c45c]" role="alert">
          {error}
        </p>
      )}
      {sent && (
        <p className="mt-4 text-sm text-[#d7ecc4]" role="status">
          Abrimos o WhatsApp com os seus dados. Se a janela não apareceu, permita pop-ups e envie de novo.
        </p>
      )}
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-gold py-3.5 text-sm font-medium text-[#1a1408] transition hover:bg-[#f0c45c]"
      >
        Quero ser revendedor
      </button>
      <p className="mt-4 text-xs leading-relaxed text-muted">
        Usamos seus dados só para retornar o contato.{" "}
        <Link href="/politica-de-privacidade" className="text-gold underline-offset-2 hover:underline">
          Política de privacidade
        </Link>
        .
      </p>
    </form>
  );
}
