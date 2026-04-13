import { useState } from "react"
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa"

function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "Partnership Inquiry",
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
        setStatus("Partnership inquiry sent successfully.")
        setFormData({
          name: "",
          email: "",
          project: "Partnership Inquiry",
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

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">
              Become Partner
            </p>

            <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              Build meaningful partnerships with Voicentra Research
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We welcome collaboration with agencies, fieldwork partners,
              research professionals, panels, and business teams who value
              quality, reliability, and long-term growth.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">
                  Why Partner With Us
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We focus on dependable execution, strong communication, and
                  insight-led delivery across research projects.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">
                  Who Can Connect
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  Research agencies, sample providers, consultants, outreach
                  specialists, and strategic collaborators are all welcome.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                <h3 className="text-lg font-semibold text-white">
                  Our Approach
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We believe strong partnerships are built on trust, clarity,
                  efficiency, and consistent value creation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-black/20">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@company.com"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Partnership Type
                </label>
                <select
                  name="project"
                  value={formData.project}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition focus:border-cyan-400/40"
                >
                  <option>Partnership Inquiry</option>
                  <option>Research Collaboration</option>
                  <option>Sample Partnership</option>
                  <option>Agency Collaboration</option>
                  <option>Business Proposal</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Partnership Details
                </label>
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how you would like to collaborate"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400/40"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Inquiry"}
              </button>

              {errors.length > 0 && (
                <div className="rounded-2xl border border-red-400/20 bg-red-400/10 p-4">
                  {errors.map((error, index) => (
                    <p key={index} className="text-sm text-red-300">
                      {error}
                    </p>
                  ))}
                </div>
              )}

              {status && (
                <p className="text-sm text-cyan-300">
                  {status}
                </p>
              )}

              <div className="pt-4">
                <p className="mb-4 text-sm text-slate-400">
                  Connect with us
                </p>
                <div className="flex items-center gap-4 text-lg text-slate-400">
                  <a
                    href="https://instagram.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://facebook.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://twitter.com/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://linkedin.com/in/YOUR_USERNAME"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-white"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PartnerPage