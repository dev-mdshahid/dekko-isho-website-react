import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/Logo.svg'
import buttonIcon from '../../assets/images/button-icon.svg'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const pageLinks = [
  { label: 'Home', to: '/' },
  { label: 'Home 2', to: '/home-2' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Products', to: '/products' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQs', to: '/faqs' },
  { label: 'Contact', to: '/contact' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
]

function isActive(pathname, to) {
  if (to === '/') {
    return pathname === '/' || pathname === '/index'
  }

  return pathname === to
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPagesOpen, setIsPagesOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsPagesOpen(false)
      }
    }

    document.addEventListener('mousedown', handleOutsideClick)

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const menuClassName = `nav-menu w-nav-menu${isMenuOpen ? ' is-open' : ''}`
  const dropdownClassName = `dropdown w-dropdown${isPagesOpen ? ' is-open' : ''}`
  const dropdownToggleClassName = `dropdown-toggle nav-link w-dropdown-toggle${isPagesOpen ? ' w--open' : ''}`
  const dropdownListClassName = `dropdown-list w-dropdown-list${isPagesOpen ? ' w--open is-open' : ''}`

  return (
    <div
      data-wf--navbar--variant="base"
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container-full w-container">
        <div className="w-layout-grid grid-nav">
          <Link
            to="/"
            id="w-node-e6ff9f79-f479-fa42-6f69-a3df18a8ef3f-18a8ef3c"
            aria-current={isActive(pathname, '/') ? 'page' : undefined}
            className={`brand w-nav-brand${isActive(pathname, '/') ? ' w--current' : ''}`}
          >
            <img src={logo} loading="lazy" alt="Brand" className="logo" />
          </Link>

          <nav
            role="navigation"
            id="w-node-e6ff9f79-f479-fa42-6f69-a3df18a8ef41-18a8ef3c"
            className={menuClassName}
          >
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(pathname, link.to) ? 'page' : undefined}
                className={`nav-link${isActive(pathname, link.to) ? ' w--current' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div
              ref={dropdownRef}
              data-hover="true"
              data-delay="0"
              data-w-id="e6ff9f79-f479-fa42-6f69-a3df18a8ef4a"
              className={dropdownClassName}
            >
              <button
                type="button"
                className={dropdownToggleClassName}
                aria-expanded={isPagesOpen}
                onClick={() => setIsPagesOpen((open) => !open)}
              >
                <div>Pages</div>
                <div className="dropdown-icon w-icon-dropdown-toggle"></div>
              </button>
              <nav className={dropdownListClassName}>
                <div className="dropdown-list-inner">
                  <div className="dropdown-link-list">
                    <div className="grid-dropdown">
                      <div>
                        {pageLinks.map((link) => (
                          <Link
                            key={link.to}
                            to={link.to}
                            aria-current={isActive(pathname, link.to) ? 'page' : undefined}
                            className={`dropdown-link w-dropdown-link${
                              isActive(pathname, link.to) ? ' w--current' : ''
                            }`}
                            onClick={() => {
                              setIsPagesOpen(false)
                              setIsMenuOpen(false)
                            }}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.to}
                to={link.to}
                aria-current={isActive(pathname, link.to) ? 'page' : undefined}
                className={`nav-link${isActive(pathname, link.to) ? ' w--current' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div id="w-node-e6ff9f79-f479-fa42-6f69-a3df18a8ef64-18a8ef3c" className="right-nav">
            <div className="nav-button-wrap">
              <Link
                data-wf--button-arrow--variant="button-primary-bg"
                data-w-id="d102baf6-0bbf-4311-9c79-6b424f8fe8a7"
                to="/contact"
                className="primary-button w-variant-5ae0b7d1-2e18-9989-4375-c73c98041680 w-inline-block"
              >
                <div className="button-primary-inner">
                  <div className="button-text-wrap">
                    <div className="button-text-inner">
                      <div className="button-text">Get a Quote</div>
                      <div className="button-hover-text">Get a Quote</div>
                    </div>
                  </div>
                  <div className="button-icon-bg w-variant-5ae0b7d1-2e18-9989-4375-c73c98041680">
                    <img src={buttonIcon} loading="eager" alt="Arrow" className="button-icon" />
                    <img src={buttonIcon} loading="lazy" alt="Arrow" className="button-icon-hover" />
                  </div>
                </div>
              </Link>
            </div>
            <button
              type="button"
              className="menu-button w-nav-button"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <div className="w-icon-nav-menu"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
