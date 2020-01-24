import React, { useEffect } from 'react'
import { Link } from 'gatsby'
import '../styles/fonts.css'
import '../styles/globalstyle.scss'
import '../styles/layout.scss'
import Team836Logo from '../assets/team836-logo.svg'
import SmokeMachine from '@bijection/smoke'

const Layout = props => {
  const { location, title, children } = props
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  useEffect(() => {
    let canvas = document.getElementsByTagName('canvas')[0]

    if (!canvas) {
      return
    }

    let ctx = canvas.getContext('2d')
    canvas.width = 1000
    canvas.height = 1000

    var party = SmokeMachine(ctx, [0, 0, 0])

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
          <Link to={`/`}>{title}</Link>
        </h1>
      </header>
    )
  }
  return (
    <div className="boundary">
      {header}
      <main>{children}</main>
      <footer className="footer">
        © {new Date().getFullYear()}{' '}
        <a href="https://github.com/team836">Team836</a>
      </footer>
    </div>
  )
}

export default Layout
