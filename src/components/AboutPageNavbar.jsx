import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
function AboutPageNavbar() {
 return (
<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
       {/* LEFT: LOGO + TAGLINE */}
<div className="flex items-center gap-4">
<img
           src={logo}
           alt="Voicentra Logo"
           className="h-12 w-auto object-contain"
         />
<p className="hidden text-sm text-slate-400 md:block">
           Every Voice Counts. Every Insight Matters.
</p>
</div>
       {/* RIGHT: HOME BUTTON ONLY */}
<div className="flex items-center">
<Link
           to="/"
           className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
>
           Home
</Link>
</div>
</div>
</header>
 )
}
export default AboutPageNavbar