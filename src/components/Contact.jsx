import { useState } from "react"
import {
  FaChartLine,
  FaUsers,
  FaBullseye,
  FaHeartbeat,
  FaLaptopCode,
  FaGlobe,
  FaBuilding,
  FaShoppingBag,
  FaStar,
} from "react-icons/fa"

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "Quantitative Research",
    message: "",
  })
  const [status, setStatus] = useState("")
  const [errors, setErrors] = useState([])
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus("")
    setErrors([])

    try {
      const response = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setStatus("Inquiry sent successfully.")
        setFormData({
          name: "",
          email: "",
          project: "Quantitative Research",
          message: "",
        })
      } else {
        if (data.errors) {
          setErrors(data.errors.map((err) => err.msg))
        } else {
          setStatus(data.message || "Something went wrong.")
        }
      }
    } catch (error) {
      setStatus("Server connection failed.")
    }

    setLoading(false)
  }

  const specialties = [
    { icon: <FaChartLine />, title: "Brand Momentum Studies" },
    { icon: <FaUsers />, title: "Audience Intelligence" },
    { icon: <FaBullseye />, title: "Concept & Ad Testing" },
    { icon: <FaHeartbeat />, title: "Healthcare Insight" },
    { icon: <FaLaptopCode />, title: "Tech & Digital Studies" },
    { icon: <FaGlobe />, title: "Market Expansion Reads" },
    { icon: <FaBuilding />, title: "B2B Research" },
    { icon: <FaShoppingBag />, title: "B2C Research" },
    { icon: <FaStar />, title: "Customer Experience" },
  ]

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 shadow-2xl shadow-cyan-950/20">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
            Contact
          </p>

          <h2 className="mt-4 text-3xl font-semibold md:text-5xl">
            Let’s discuss your next research project
          </h2>

          <p className="mt-5 text-lg text-slate-300">
            Explore our research capabilities and connect with Voicentra Research
            for data-driven decisions.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {specialties.map((item) => (
              <div
                key={item.title}
                className="rounded-[24px] border border-white/10 bg-slate-950/40 p-5 transition hover:-translate-y-1 hover:border-cyan-400/20 hover:bg-slate-900"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-white">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-full flex-col justify-between rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-5">
              <div>
                <label className="text-sm text-slate-300">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="text-sm text-slate-300">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="text-sm text-slate-300">Project Type</label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
                >
                  <option>Quantitative Research</option>
                  <option>Qualitative Research</option>
                  <option>Fieldwork</option>
                  <option>Reporting</option>
                  <option>Brand Tracking</option>
                  <option>Concept Testing</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-300">Project Details</label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your research needs"
                  required
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
                ></textarea>
              </div>
            </div>

            <div className="mt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-cyan-400 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              {errors.length > 0 && (
                <div className="mt-4 text-sm text-red-400">
                  {errors.map((err, i) => (
                    <p key={i}>{err}</p>
                  ))}
                </div>
              )}

              {status && (
                <p className="mt-3 text-sm text-cyan-300">
                  {status}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact