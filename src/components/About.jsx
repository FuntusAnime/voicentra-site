function About() {
 return (
<section id="about" className="mx-auto max-w-7xl px-6 py-20">
<div className="grid items-center gap-12 lg:grid-cols-2">
       {/* LEFT SIDE */}
<div>
<p className="text-sm font-semibold tracking-widest text-cyan-400">
           ABOUT US
</p>
<h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
           A modern market research company built around better listening
</h2>
</div>
       {/* RIGHT SIDE */}
<div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 space-y-6">
         {/* 🔥 EXPERIENCE BADGE */}
<div className="flex items-center gap-4 rounded-xl bg-gradient-to-r from-cyan-400/10 to-blue-500/10 border border-cyan-400/20 px-5 py-4">
<div className="text-3xl font-bold text-cyan-300">
             8+
</div>
<div>
<p className="text-sm text-slate-400">Years of Experience</p>
<p className="text-white font-medium">
               Delivering trusted insights across industries
</p>
</div>
</div>
         {/* CONTENT */}
<p className="text-slate-300 leading-relaxed">
           Voicentra Research helps brands, agencies, and business teams gather
           reliable feedback and transform it into meaningful, actionable insights.
</p>
<p className="text-slate-300 leading-relaxed">
           Our approach combines dependable data collection, thoughtful analysis,
           and decision-focused reporting to help clients understand their audience,
           identify opportunities, and make confident decisions.
</p>
<p className="text-slate-300 leading-relaxed">
           From survey execution to insight delivery, we focus on delivering research
           that is professional, impactful, and genuinely useful for long-term growth.
</p>
</div>
</div>
</section>
 )
}
export default About