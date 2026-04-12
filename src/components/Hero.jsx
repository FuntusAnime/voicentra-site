import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
function Hero() {
 const [progress, setProgress] = useState({
   completion: 0,
   validation: 0,
   clarity: 0,
 })
 useEffect(() => {
   const timer = setTimeout(() => {
     setProgress({
       completion: 100,
       validation: 100,
       clarity: 100,
     })
   }, 300)
   return () => clearTimeout(timer)
 }, [])
 return (
<section className="mx-auto max-w-7xl px-6 py-20">
<div className="grid items-center gap-10 lg:grid-cols-2">
       {/* LEFT SIDE */}
<div>
<span className="inline-block rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300">
           Independent Market Research Partner
</span>
<h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-6xl">
           Research that turns voices into valuable decisions
</h1>
<p className="mt-6 text-lg text-slate-300">
           Voicentra Research helps brands uncover meaningful insights through
           reliable data collection, thoughtful analysis, and decision-focused reporting.
</p>
         {/* 🔥 BUTTONS */}
<div className="mt-8 flex gap-4">
           {/* Become Partner */}
<Link
             to="/partner"
             className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-[1.05] hover:bg-cyan-300"
>
             Become Partner
</Link>
           {/* Our Services */}

</div>
</div>
       {/* RIGHT SIDE DASHBOARD */}
<div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/20">
<div className="flex items-center justify-between">
<div>
<p className="text-sm text-slate-400">Research Overview</p>
<h3 className="text-xl font-semibold text-white">
               Insight Dashboard
</h3>
</div>
<span className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
             Live Data
</span>
</div>
<div className="mt-6 space-y-6">
           {/* Completion */}
<div>
<div className="flex justify-between text-sm text-slate-300">
<span>Survey Completion Quality</span>
<span>{progress.completion}%</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div
                 className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                 style={{ width: `${progress.completion}%` }}
></div>
</div>
</div>
           {/* Validation */}
<div>
<div className="flex justify-between text-sm text-slate-300">
<span>Validated Respondent Rate</span>
<span>{progress.validation}%</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div
                 className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 delay-150"
                 style={{ width: `${progress.validation}%` }}
></div>
</div>
</div>
           {/* Clarity */}
<div>
<div className="flex justify-between text-sm text-slate-300">
<span>Reporting Clarity</span>
<span>{progress.clarity}%</span>
</div>
<div className="mt-2 h-2 w-full rounded-full bg-slate-800">
<div
                 className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000 delay-300"
                 style={{ width: `${progress.clarity}%` }}
></div>
</div>
</div>
</div>
</div>
</div>
</section>
 )
}
export default Hero