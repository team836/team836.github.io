import React from 'react'
import { Link } from 'gatsby'
import '../styles/globalstyle.scss'
import '../styles/layout.scss'

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: 10,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div className="boundary">
      <header>{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}{' '}
        <a href="https://github.com/team836">Team836</a>
      </footer>
    </div>
  )
}

export default Layout
