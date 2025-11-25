import Header from '../components/Header'
import Section from '../components/Section'

const cvPdfPath = '/OIKONOMOU_compressed.pdf'

export default function Home() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary to-slateblue text-brown">
      <Header
        name="Elpida Oikonomou"
        title="Physicist & Master's Student — Translational Engineering in Health and Medicine"
        contact={{ email: 'elp.oikono@gmail.com', linkedin: 'https://linkedin.com/in/www.linkedin.com/in/elpida-oikonomou-269270350' }}
      />

      <main className="-mt-8">
        <div className="bg-white/90 backdrop-blur-md rounded-t-2xl shadow-lg">
          <Section title="Profile">
            <p>
              Analytical and detail-oriented Physicist currently pursuing a Master's in Translational Engineering in Health and Medicine at NTUA. Experienced in data analysis, numerical modeling, and scientific computing, with research experience in computational physics and plasma simulations.
            </p>
          </Section>

          <Section title="Experience">
            <h3 className="font-semibold">Sales Assistant — Intersport</h3>
            <p className="text-sm opacity-90">Feb 2025 – Nov 2025, Athens</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Developed communication and teamwork skills in a fast-paced retail setting.</li>
              <li>Strengthened multitasking while balancing academics.</li>
            </ul>

            <h3 className="font-semibold mt-4">Research Intern — Academy of Athens</h3>
            <p className="text-sm opacity-90">Summer 2024, Athens</p>
            <ul className="list-disc ml-6 mt-2">
              <li>Worked with the Zeltron PIC simulation (Fortran) for plasma electrodynamics modeling.</li>
              <li>Attempted to simulate particle motion in pulsars & improve simulation accuracy.</li>
            </ul>
          </Section>

          <Section title="Education">
            <p>MSc — Translational Engineering in Health and Medicine, NTUA (Sep 2025 – Present)</p>
            <p className="mt-2">BSc — Physics, NKUA (Oct 2020 – Sep 2025)</p>
          </Section>

          <Section title="Projects">
            <ul className="list-disc ml-6">
              <li>Undergraduate Thesis: Synchro-Curvature Radiation in Pulsar Magnetospheres (2024–2025)</li>
              <li>Geomagnetic Storm Analysis (2024)</li>
              <li>Science Outreach: Planets in Your Hand (2023)</li>
            </ul>
          </Section>

          <Section title="Skills & Languages">
            <p><strong>Technical:</strong> Python, MATLAB, C/Fortran, LaTeX, PIC simulations, Linux</p>
            <p className="mt-2"><strong>Languages:</strong> Greek (native), English (C2), German (A2)</p>
          </Section>

          <Section title="Download CV">
            <p>
              <a href={cvPdfPath} download className="inline-block px-4 py-2 rounded bg-brown text-sand font-medium">Download my CV (PDF)</a>
            </p>
          </Section>

          <div className="h-24" />
        </div>
      </main>

      <footer className="py-6 text-center text-sm text-sand/80">
        © {new Date().getFullYear()} Elpida Oikonomou — Built with Next.js & Tailwind
      </footer>
    </div>
  )
}
