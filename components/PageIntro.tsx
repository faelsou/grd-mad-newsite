export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[12px] font-medium tracking-[0.22em] text-gold">{eyebrow}</p>
      <h1 className="mt-3 font-serif text-4xl leading-[1.08] text-[#f7f2ea] md:text-5xl">{title}</h1>
      <p className="mt-4 text-[15px] leading-relaxed text-muted md:text-base">{text}</p>
    </div>
  );
}
