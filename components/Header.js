export default function Header({ name, title, contact }) {
  return (
    <header className="py-12 px-6 md:px-20 bg-gradient-to-b from-primary/95 to-slateblue/90 text-sand">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{name}</h1>
        <p className="mt-2 text-lg md:text-xl opacity-90">{title}</p>
        <div className="mt-4 text-sm md:text-base opacity-90">
          <a href={`mailto:${contact.email}`} className="mr-4">{contact.email}</a>
          <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </header>
  )
}