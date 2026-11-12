import { site, whatsappLink } from "@/lib/site";

export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 px-4 py-3 backdrop-blur md:hidden">
      <div className="grid grid-cols-2 gap-3">
        <a
          href={site.catalog}
          download
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-3 py-3 text-sm text-[#f6f1e8]"
        >
          <DownloadIcon />
          Catálogo
        </a>
        <a
          href={whatsappLink("Olá, quero falar com a GRD MAD sobre revenda de móveis planejados.")}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-3 py-3 text-sm font-medium text-[#1a1408]"
        >
          <WhatsIcon />
          WhatsApp
        </a>
      </div>
    </div>
  );
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 4v11m0 0 4-4m-4 4-4-4M5 20h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 3C7.31 3 3.5 6.7 3.5 11.28c0 1.46.39 2.88 1.14 4.13L3.4 21l5.76-1.2a8.7 8.7 0 0 0 2.88.48c4.73 0 8.54-3.7 8.54-8.28C20.58 6.7 16.77 3 12.04 3Zm4.95 11.72c-.2.58-1.18 1.1-1.64 1.16-.42.06-.96.08-1.55-.1-.36-.1-.82-.26-1.41-.51-2.48-1.07-4.1-3.57-4.22-3.74-.12-.17-1-1.33-1-2.54 0-1.2.63-1.8.86-2.04.22-.24.49-.3.65-.3h.47c.15 0 .35-.06.55.42.2.5.7 1.72.76 1.84.06.13.1.27.02.44-.08.17-.12.27-.24.42-.12.14-.25.32-.36.43-.12.12-.24.24-.1.47.14.23.62 1.02 1.33 1.65.92.82 1.69 1.07 1.93 1.19.24.12.38.1.52-.06.14-.17.6-.7.76-.94.16-.24.32-.2.54-.12.22.08 1.4.66 1.64.78.24.12.4.18.46.28.06.1.06.58-.14 1.16Z" />
    </svg>
  );
}
