"use client";

import Link from "next/link";
import { useState } from "react";
import { nav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1180px] items-center justify-between gap-4 px-5 md:px-8">
        <Link href="/" className="shrink-0" aria-label="GRD MAD, início">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="GRD MAD" className="h-12 w-auto md:h-14" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[13.5px] text-[#d9d3c8] transition hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link href="/status-do-pedido" className="text-[13.5px] text-[#d9d3c8] hover:text-gold">
            Status do pedido
          </Link>
          <Link
            href="/#revendedor"
            className="rounded-full bg-gold px-4 py-2 text-[13.5px] font-medium text-[#1a1408] transition hover:bg-[#f0c45c]"
          >
            Seja revendedor
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span className={`h-px w-full bg-[#f6f1e8] transition ${open ? "translate-y-[7.5px] rotate-45" : ""}`} />
            <span className={`h-px w-full bg-[#f6f1e8] transition ${open ? "opacity-0" : ""}`} />
            <span className={`h-px w-full bg-[#f6f1e8] transition ${open ? "-translate-y-[7.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 lg:hidden">
          <nav className="flex flex-col" aria-label="Menu móvel">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-3 font-serif text-2xl text-[#f6f1e8]"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/status-do-pedido"
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-3 font-serif text-2xl"
            >
              Status do pedido
            </Link>
            <Link
              href="/#revendedor"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-gold px-4 py-3 text-center font-medium text-[#1a1408]"
            >
              Seja revendedor
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
