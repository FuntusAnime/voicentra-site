import { useLocation } from "react-router-dom"
import {
 FaInstagram,
 FaFacebookF,
 FaTwitter,
 FaLinkedinIn,
 FaPhoneAlt,
 FaEnvelope,
 FaMapMarkerAlt,
} from "react-icons/fa"
function Footer() {
 const location = useLocation()
 const hideSocial = location.pathname === "/partner"
 return (
<footer className="border-t border-white/10 bg-slate-950/80">
<div className="mx-auto max-w-7xl px-6 py-6">
<div className="flex flex-col gap-6 text-sm text-slate-300 lg:flex-row lg:items-center lg:justify-between">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
<a href="tel:+919123183147" className="flex items-center gap-2 hover:text-white">
<FaPhoneAlt className="text-red-400" />
<span>+91 9123183147</span>
</a>
<a
             href="mailto:voicentraresearch@gmail.com"
             className="flex items-center gap-2 hover:text-white"
>
<FaEnvelope />
<span>voicentraresearch@gmail.com</span>
</a>
</div>
<div className="flex items-center gap-2">
<FaMapMarkerAlt className="text-cyan-400" />
<span>Jharkhand - Hazaribagh, 825301</span>
</div>
         {!hideSocial && (
<div className="flex items-center gap-4 text-base text-slate-400">
<a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
<FaInstagram />
</a>
<a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
<FaFacebookF />
</a>
<a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
<FaTwitter />
</a>
<a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-white">
<FaLinkedinIn />
</a>
</div>
         )}
<div className="text-slate-500">
           © 2026 Voicentra Research. All rights reserved.
</div>
</div>
</div>
</footer>
 )
}
export default Footer