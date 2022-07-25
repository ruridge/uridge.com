import { FiExternalLink } from 'react-icons/fi'
import Link from 'next/link'

export const Navigation = () => {
  return (
    <nav className="flex justify-evenly">
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/snippets">Snippets</Link>
      <Link
        href="https://github.com/ruridge/uridge.com"
        className="flex items-center justify-between gap-1"
      >
        Source <FiExternalLink />
      </Link>
    </nav>
  )
}
