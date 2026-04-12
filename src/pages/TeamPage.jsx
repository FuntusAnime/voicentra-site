function TeamPage() {
 return (
<div className="min-h-screen bg-slate-950 text-white">
<section className="mx-auto max-w-7xl px-6 py-20">
<div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
         {/* LEFT SIDE */}
<div>
<p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
             Founder
</p>
<h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
             Meet the person behind Voicentra Research
</h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
             Built with a strong focus on credibility, insight quality, and
             decision-ready research, Voicentra Research reflects a founder-led
             commitment to understanding people, markets, and opportunities
             with clarity.
</p>
<div className="mt-8 flex flex-wrap gap-4">
<div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3">
<p className="text-2xl font-bold text-cyan-300">Founder-Led</p>
<p className="text-sm text-slate-300">Independent Vision</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
<p className="text-2xl font-bold text-white">Market Research</p>
<p className="text-sm text-slate-300">Insight-Driven Approach</p>
</div>
</div>
</div>
         {/* RIGHT SIDE */}
<div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
<div className="space-y-6">
<div className="rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 px-6 py-5">
<h2 className="text-3xl font-bold text-white">
                 SHASHANK SHEKHAR
</h2>
<p className="mt-2 text-lg font-medium text-cyan-300">
                 Founder, Voicentra Research
</p>
</div>
<p className="text-base leading-8 text-slate-300">
               Shashank Shekhar is the founder of Voicentra Research, with a
               strong interest in building a modern market research company that
               values data quality, practical insights, and professional client
               delivery. His vision is centered on turning feedback into clear,
               meaningful direction for businesses.
</p>
<p className="text-base leading-8 text-slate-300">
               With a focus on market research, audience understanding, and
               research execution, he aims to create studies that are not only
               well-structured, but genuinely useful for business growth,
               strategic planning, and smarter decision-making.
</p>
<p className="text-base leading-8 text-slate-300">
               Under his leadership, Voicentra Research is positioned as a
               trusted, insight-led company designed to support brands,
               agencies, and organizations through dependable research,
               thoughtful analysis, and a commitment to continuous improvement.
</p>
<div className="grid gap-4 sm:grid-cols-3">
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
<p className="text-sm text-slate-400">Focus</p>
<p className="mt-2 font-semibold text-white">
                   Market Research
</p>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
<p className="text-sm text-slate-400">Strength</p>
<p className="mt-2 font-semibold text-white">
                   Insight Quality
</p>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-5">
<p className="text-sm text-slate-400">Vision</p>
<p className="mt-2 font-semibold text-white">
                   Trusted Growth
</p>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
 )
}
export default TeamPage