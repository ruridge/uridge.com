import Link from 'next/link'

export const navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/snippets">
            <a>Snippets</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
