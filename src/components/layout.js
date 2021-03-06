import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/fonts.css'
import '../styles/globalstyle.scss'
import '../styles/layout.scss'
import Team836Logo from '../assets/team836-logo.svg'

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  useEffect(() => {
    let canvas = document.getElementsByTagName('canvas')[0]

    if (!canvas) {
      return
    }

    const SmokeMachine = require('@bijection/smoke')

    let ctx = canvas.getContext('2d')
    canvas.width = 1000
    canvas.height = 1000

    var party = SmokeMachine(ctx, [30, 20, 0])

    party.start()

    party.addSmoke(500, 900, 10)

    setInterval(() => {
      party.addSmoke(500, 900, 10)
    }, 900)
  }, [])

  if (location.pathname === rootPath) {
    header = (
      <header className="header home">
        <div className="logo-wrapper">
          <canvas></canvas>
          <img src={Team836Logo} />
        </div>
      </header>
    )
  } else {
    header = (
      <header className="header post">
        <h1>
          <Link to={`/`}>
            <span className="arrow">{`←`}</span>
            {` Home`}
          </Link>
        </h1>
      </header>
    )
  }
  return (
    <div className="boundary">
      {header}
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()}
        {` `}
        <a
          href="https://github.com/team836"
          style={{
            textDecoration: 'underline',
          }}
        >
          Team836
        </a>
        {` | `}
        Designed by{' '}
        <a
          href="https://jhaemin.com"
          style={{
            textDecoration: 'underline',
          }}
        >
          J.Haemin
        </a>
      </footer>
    </div>
  )
}

export default Layout
