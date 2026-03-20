import { NavLink } from 'react-router-dom'

export default function TopBar() {
  return (
    <header className="topbar" role="banner">
      <div className="topbar-inner">
        <div className="brand">
          <NavLink to="/" aria-label="Home" className={({ isActive }) => (isActive ? 'active' : '')}>
            Disability Resources
          </NavLink>
        </div>
        <nav aria-label="Main navigation">
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/mission" className={({ isActive }) => (isActive ? 'active' : '')}>
                Our Mission
              </NavLink>
            </li>
            <li>
              <NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/legal" className={({ isActive }) => (isActive ? 'active' : '')}>
                Legal
              </NavLink>
            </li>
            <li>
              <NavLink to="/privacy" className={({ isActive }) => (isActive ? 'active' : '')}>
                Privacy
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
