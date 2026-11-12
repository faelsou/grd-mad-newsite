"use client";

import { useState } from "react";
import { categories, projects } from "@/lib/site";

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("Todos");
  const visible = projects.filter((project) => filter === "Todos" || project.category === filter);

  return (
    <section id="portfolio" className="bg-ink-2 px-5 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-[12px] font-medium tracking-[0.22em] text-gold">PORTFÓLIO</p>
        <h2 className="mt-3 max-w-xl font-serif text-4xl leading-[1.08] text-[#f7f2ea] md:text-5xl">
          Projetos de lojistas parceiros, produzidos aqui.
        </h2>

        <div className="mt-8 flex flex-wrap gap-2" role="tablist" aria-label="Filtrar portfólio">
          {categories.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(category)}
                className={`rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "bg-gold text-[#1a1408]"
                    : "border border-white/15 text-[#d9d3c8] hover:border-gold/60"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article key={project.title}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={project.image} alt={project.alt} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-[15px] font-medium text-[#f6f1e8]">{project.title}</h3>
              <p className="mt-1 text-sm text-muted">{project.meta}</p>
            </article>
          ))}
        </div>
        {visible.length === 0 && (
          <p className="mt-10 text-muted">Nenhum projeto nesta categoria ainda.</p>
        )}
      </div>
    </section>
  );
}
