function AboutPage() {
 return (
<div className="min-h-screen bg-slate-950 text-white">
<section className="mx-auto max-w-7xl px-6 py-20">
<div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
         {/* LEFT SIDE */}
<div>
<p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
             About Voicentra
</p>
<h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
             Research built on trust, precision, and real-world understanding
</h1>
<p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
             Voicentra Research is focused on helping brands, businesses, and
             decision-makers move forward with clarity through dependable
             market research and insight-led thinking.
</p>
<div className="mt-8 flex flex-wrap gap-4">
<div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3">
<p className="text-2xl font-bold text-cyan-300">8+</p>
<p className="text-sm text-slate-300">Years Experience</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
<p className="text-2xl font-bold text-white">B2B + B2C</p>
<p className="text-sm text-slate-300">Multi-sector Research</p>
</div>
<div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3">
<p className="text-2xl font-bold text-white">Healthcare</p>
<p className="text-sm text-slate-300">Specialized Studies</p>
</div>
</div>
</div>
         {/* RIGHT SIDE */}
<div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
<div className="space-y-6 text-base leading-8 text-slate-300">
<p>
               Voicentra Research is an independent market research company
               committed to delivering high-quality insights through strong
               methodology, dependable execution, and thoughtful analysis. Our
               work is designed to help clients understand people better,
               reduce uncertainty, and make more confident business decisions.
</p>
<p>
               We bring experience across both <span className="font-semibold text-white">B2B</span> and{" "}
<span className="font-semibold text-white">B2C</span> research,
               supporting projects that require accurate audience profiling,
               intelligent sampling, concept testing, opinion studies, and
               clear reporting. From niche business respondents to broader
               consumer audiences, we focus on research that is structured,
               relevant, and decision-ready.
</p>
<p>
               Our capabilities also extend into{" "}
<span className="font-semibold text-white">healthcare studies</span>,
               where careful respondent selection, sensitive questionnaire
               design, and reliability of insight are especially important.
               Whether the objective is understanding patients, caregivers,
               professionals, or specialized segments, we approach every study
               with seriousness and precision.
</p>
<p>
               With <span className="font-semibold text-white">8+ years of experience</span>,
               Voicentra Research continues to build on a simple belief: every
               voice has value, and every insight can create a better decision.
               That is why our focus remains on practical research, meaningful
               sampling quality, and outcomes that clients can genuinely use to
               grow, improve, and lead with confidence.
</p>
</div>
</div>
</div>
</section>
     {/* SECOND SECTION */}
<section className="mx-auto max-w-7xl px-6 pb-20">
<div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 shadow-2xl shadow-cyan-950/20">
<p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
           What We Stand For
</p>
<div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
<h3 className="text-lg font-semibold text-white">Reliable Sampling</h3>
<p className="mt-3 text-sm leading-7 text-slate-300">
               We value respondent quality, audience relevance, and study fit
               to support stronger outcomes.
</p>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
<h3 className="text-lg font-semibold text-white">Business Clarity</h3>
<p className="mt-3 text-sm leading-7 text-slate-300">
               Research should not only collect opinions, it should make
               decisions easier and smarter.
</p>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
<h3 className="text-lg font-semibold text-white">Sector Versatility</h3>
<p className="mt-3 text-sm leading-7 text-slate-300">
               From B2B and B2C projects to healthcare and specialist studies,
               we adapt with purpose.
</p>
</div>
<div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6">
<h3 className="text-lg font-semibold text-white">Insight with Impact</h3>
<p className="mt-3 text-sm leading-7 text-slate-300">
               Our goal is always to turn data into practical direction that
               clients can trust and act on.
</p>
</div>
</div>
</div>
</section>
</div>
 )
}
export default AboutPage