export default function Section({ title, children }) {
  return (
    <section className="py-8 px-6 md:px-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="prose prose-sm">{children}</div>
    </section>
  )
}