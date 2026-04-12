import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"

import { useEffect } from "react"

import Navbar from "./components/Navbar"

import AboutPageNavbar from "./components/AboutPageNavbar"

import Footer from "./components/Footer"

import HomePage from "./pages/HomePage"

import AboutPage from "./pages/AboutPage"

import TeamPage from "./pages/TeamPage"

import PartnerPage from "./pages/PartnerPage"

function ScrollToTop() {

  const location = useLocation()

  useEffect(() => {

    const startY = window.scrollY

    const duration = 1200

    let startTime = null

    let frameId = null

    const easeInOutCubic = (t) => {

      return t < 0.5

        ? 4 * t * t * t

        : 1 - Math.pow(-2 * t + 2, 3) / 2

    }

    const animateScroll = (currentTime) => {

      if (!startTime) startTime = currentTime

      const elapsed = currentTime - startTime

      const progress = Math.min(elapsed / duration, 1)

      const eased = easeInOutCubic(progress)

      window.scrollTo(0, startY * (1 - eased))

      if (progress < 1) {

        frameId = requestAnimationFrame(animateScroll)

      }

    }

    frameId = requestAnimationFrame(animateScroll)

    return () => {

      if (frameId) cancelAnimationFrame(frameId)

    }

  }, [location.pathname])

  useEffect(() => {

    if ("scrollRestoration" in window.history) {

      window.history.scrollRestoration = "manual"

    }

  }, [])

  return null

}

function AppLayout() {

  const location = useLocation()

  const useSimpleNavbar =

    location.pathname === "/about" ||

    location.pathname === "/team" ||

    location.pathname === "/partner"

  return (
<div className="min-h-screen bg-slate-950 text-white">
<ScrollToTop />

      {useSimpleNavbar ? <AboutPageNavbar /> : <Navbar />}
<Routes>
<Route path="/" element={<HomePage />} />
<Route path="/about" element={<AboutPage />} />
<Route path="/team" element={<TeamPage />} />
<Route path="/partner" element={<PartnerPage />} />
</Routes>
<Footer />
</div>

  )

}

function App() {

  return (
<BrowserRouter>
<AppLayout />
</BrowserRouter>

  )

}

export default App
 