import { Link, useLocation } from 'react-router-dom'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter-x.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import footerLogo from '../../assets/images/Home-2-logo.svg'
import footerShadow from '../../assets/images/blur.svg'

const mainLinks = [
  { label: 'Home', to: '/' },
  { label: 'Home 2', to: '/home-2' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
]

const utilityLinks = [
  { label: 'Style Guide', to: '/utility-pages/style-guide' },
  { label: 'Instructions', to: '/utility-pages/instructions' },
  { label: 'Licenses', to: '/utility-pages/licenses' },
  { label: 'Changelog', to: '/utility-pages/changelog' },
  { label: 'Error 404', to: '/404' },
  { label: 'Password Protected', to: '/401' },
]

const socialLinks = [
  { label: 'Facebook', href: 'https://www.facebook.com/', icon: facebookIcon, alt: 'social-icon' },
  { label: 'Twitter', href: 'https://twitter.com/', icon: twitterIcon, alt: '' },
  { label: 'Instagram', href: 'https://www.instagram.com/', icon: instagramIcon, alt: 'social-icon' },
]

function isActive(pathname: string, to: string) {
  if (to === '/') {
    return pathname === '/' || pathname === '/index'
  }

  return pathname === to
}

export default function Footer() {
  const { pathname } = useLocation()

  return (
    <section id="Footer" data-wf--footer--variant="base" className="footer">
      <div data-w-id="84eea156-668a-6145-cebb-c3051d65f2bd" className="footer-main section-spacing-top">
        <div className="footer-bg-wrap">
          <div className="w-layout-grid grid-footer">
            <div className="footer-subscribe">
              <div data-w-id="9807520c-65b7-e828-71bd-909a6cfe182e" className="subscribe-wrap">
                <h2 className="subscribe-title">Stay connected</h2>
                <p className="subscribe-description">
                  Join our newsletter for tips, updates, and project highlights-only the good stuff.
                </p>
                <div className="form-subscribe-wrap w-form">
                  <form
                    id="wf-form-Subscribe-Form"
                    name="wf-form-Subscribe-Form"
                    data-name="Subscribe Form"
                    method="get"
                    className="form-subscribe"
                    data-wf-page-id="6a26a196936d1b3aae320c59"
                    data-wf-element-id="9807520c-65b7-e828-71bd-909a6cfe1832"
                  >
                    <input
                      className="form-input form-input-subscribe w-input"
                      maxLength={256}
                      name="Email"
                      data-name="Email"
                      placeholder="Enter your email"
                      type="email"
                      id="Email"
                      required
                    />
                    <input
                      type="submit"
                      data-wait=""
                      aria-label="Button"
                      className="button-subscribe w-button"
                      value=""
                    />
                  </form>
                  <div className="success-message w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div className="error-message w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
                </div>
              </div>
            </div>

            <div id="w-node-_9807520c-65b7-e828-71bd-909a6cfe1805-6cfe1801" className="footer-item">
              <div className="w-layout-grid grid-footer-menu">
                <div data-w-id="66876f43-9ec4-1dbd-0ca0-ca548397b94e" className="footer-link-item">
                  <h2 className="footer-title">Main links</h2>
                  <div className="footer-links">
                    {mainLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        aria-current={isActive(pathname, link.to) ? 'page' : undefined}
                        className={`footer-link${isActive(pathname, link.to) ? ' w--current' : ''}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div data-w-id="c3c71fa1-678a-c8f3-2483-91e8980a3ade" className="footer-link-item">
                  <h2 className="footer-title">Utility links</h2>
                  <div className="footer-links">
                    {utilityLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        aria-current={isActive(pathname, link.to) ? 'page' : undefined}
                        className={`footer-link${isActive(pathname, link.to) ? ' w--current' : ''}`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>

                <div data-w-id="64c645f9-8fac-49b8-f082-3f384284032e" className="footer-contact-list">
                  <h2 className="footer-title">Contact info</h2>
                  <div className="footer-contact-item">
                    <div className="footer-address">1238 echo ridge blvd, suite 400, san francisco, CA 94103</div>
                    <a href="tel:+1(415)555-0167" className="footer-link">
                      +1 (415) 555-0167
                    </a>
                    <a href="mailto:example@gmail.com" className="footer-link">
                      example@gmail.com
                    </a>
                  </div>
                </div>

                <div data-w-id="2421dafb-c91b-f351-19c3-69d4e8192796" className="footer-contact-list">
                  <h2 className="footer-title">Working hours</h2>
                  <div className="footer-contact-item">
                    <div className="working-text">Mon to Fri: 8:00am - 4:00pm</div>
                    <div className="working-text">Saturday: 8:00am - 1:00pm</div>
                    <div className="working-text">Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="footer-bottom-wrap">
            <div data-w-id="d283640d-fc6a-1283-2d22-21620e76ddab" className="footer-copyright-wrap">
              <p className="footer-copyright">
                Designed by{' '}
                <a
                  href="https://webestica.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-copyright-link"
                >
                  Webestica
                </a>
                , Powered by{' '}
                <a
                  href="https://webflow.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="footer-copyright-link"
                >
                  Webflow
                </a>
              </p>
            </div>

            <div data-w-id="9807520c-65b7-e828-71bd-909a6cfe1841" className="footer-social-inline">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-social-link w-inline-block"
                >
                  <img src={link.icon} loading="eager" alt={link.alt} className="footer-social-icon" />
                  <div>{link.label}</div>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-logo-info">
            <img
              src={footerLogo}
              loading="lazy"
              data-w-id="65ddfbf8-98dc-79d4-6020-0e2cf17451cf"
              alt="Footer Logo"
              className="footer-logo"
            />
          </div>
        </div>
      </div>
      <img src={footerShadow} loading="lazy" alt="Footer Shadow" className="footer-shadow _01" />
      <img src={footerShadow} loading="lazy" alt="Footer Shadow" className="footer-shadow _02" />
      <div className="line-wrapper">
        <div className="section-line"></div>
        <div className="section-line"></div>
        <div className="section-line"></div>
        <div className="section-line"></div>
        <div className="section-line"></div>
      </div>
    </section>
  )
}
