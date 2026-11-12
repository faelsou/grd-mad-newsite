import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pb-24 md:pb-0">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3 text-sm text-muted">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="h-10 w-auto" />
          <p>© 2026 GRD MAD · CNPJ {site.cnpj}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm" aria-label="Rodapé">
          <a href={site.instagram} className="text-[#d9d3c8] underline-offset-4 hover:text-gold hover:underline" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <Link href="/politica-de-privacidade" className="text-[#d9d3c8] underline-offset-4 hover:text-gold hover:underline">
            Política de privacidade
          </Link>
          <Link href="/termos-de-uso" className="text-[#d9d3c8] underline-offset-4 hover:text-gold hover:underline">
            Termos de uso
          </Link>
        </nav>
      </div>
    </footer>
  );
}
