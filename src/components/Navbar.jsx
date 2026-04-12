import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png"
function Navbar() {
 const [showAboutMenu, setShowAboutMenu] = useState(false)
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
 const menuRef = useRef(null)
 const navigate = useNavigate()
 const location = useLocation()
 const closeMenu = () => {
   setShowAboutMenu(false)
   setMobileMenuOpen(false)
 }
 const handleHomeClick = (e) => {
   e.preventDefault()
   closeMenu()
   if (location.pathname === "/") {
     window.scrollTo({
       top: 0,
       behavior: "smooth",
     })
   } else {
     navigate("/")
     setTimeout(() => {
       window.scrollTo({
         top: 0,
         behavior: "smooth",
       })
     }, 100)
   }
 }
 useEffect(() => {
   function handleClickOutside(event) {
     if (menuRef.current && !menuRef.current.contains(event.target)) {
       setShowAboutMenu(false)
     }
   }
   document.addEventListener("mousedown", handleClickOutside)
   return () => {
     document.removeEventListener("mousedown", handleClickOutside)
   }
 }, [])
 return (
<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
<div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
       {/* LEFT: LOGO + TAGLINE */}
<div className="flex min-w-0 items-center gap-3">
<img
           src={logo}
           alt="Voicentra Logo"
           className="h-18 w-auto object-contain md:h-12"
         />
<p className="hidden truncate text-sm text-slate-400 lg:block">
           Every Voice Counts. Every Insight Matters.
</p>
</div>
       {/* DESKTOP NAV */}
<nav className="hidden flex-1 items-center justify-center gap-10 md:flex">
<a
           href="/"
           onClick={handleHomeClick}
           className="border-b-2 border-cyan-400 pb-1 text-sm font-semibold text-cyan-400"
>
           Home
</a>
<div className="relative" ref={menuRef}>
<button
             type="button"
             onClick={() => setShowAboutMenu((prev) => !prev)}
             className="text-sm font-medium text-slate-300 transition hover:text-white"
>
             About
</button>
           {showAboutMenu && (
<div className="absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-slate-900/95 p-2 shadow-2xl">
<Link
                 to="/about"
                 onClick={closeMenu}
                 className="block rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
>
                 About Voicentra
</Link>
<Link
                 to="/team"
                 onClick={closeMenu}
                 className="block rounded-lg px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
>
                 Team
</Link>

</div>
           )}
</div>
</nav>
       {/* DESKTOP RIGHT BUTTONS */}
<div className="hidden items-center gap-3 md:flex">
<a
           href="http://localhost:5173/login"
           className="rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
>
           Dashboard
</a>
<a
           href="/#contact"
           className="rounded-xl bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
>
           Contact Us
</a>
</div>
       {/* MOBILE MENU BUTTON */}
<button
         type="button"
         onClick={() => setMobileMenuOpen((prev) => !prev)}
         className="rounded-xl border border-white/10 p-2 text-white md:hidden"
>
         {mobileMenuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
</button>
</div>
     {/* MOBILE MENU */}
     {mobileMenuOpen && (
<div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 md:hidden">
<div className="flex flex-col gap-3">
<a
             href="/"
             onClick={handleHomeClick}
             className="rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white"
>
             Home
</a>
<Link
             to="/about"
             onClick={closeMenu}
             className="rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white"
>
             About Voicentra
</Link>
<Link
             to="/team"
             onClick={closeMenu}
             className="rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white"
>
             Team
</Link>
<Link
             to="/partner"
             onClick={closeMenu}
             className="rounded-xl bg-white/5 px-4 py-3 text-sm font-medium text-white"
>
             Become Partner
</Link>
<a
             href="http://localhost:5173/login"
             onClick={closeMenu}
             className="rounded-xl border border-white/10 px-4 py-3 text-sm font-medium text-white"
>
             Dashboard
</a>
<a
             href="/#contact"
             onClick={closeMenu}
             className="rounded-xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950"
>
             Contact Us
</a>
</div>
</div>
     )}
</header>
 )
}
export default Navbar