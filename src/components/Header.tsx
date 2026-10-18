import { Search, ShoppingBag, User } from 'lucide-react'
import './Header.css'

const links = ['Men', 'Runway', 'Women', 'Kids', 'Home', 'Perfumes']

export default function Header() {
  return (
    <header className="header">
      <a className="logo" href="/">
        RUNWAY
      </a>

      <label className="search">
        <input placeholder="Search" />
        <Search size={13} />
      </label>

      <nav className="nav">
        {links.map((link) => (
          <a key={link} href="#" className={link === 'Runway' ? 'active' : ''}>
            {link}
          </a>
        ))}
      </nav>

      <div className="account">
        <a href="#">
          <User size={13} /> Log in
        </a>
        <a href="#">
          <ShoppingBag size={13} /> Shopping bag
        </a>
      </div>
    </header>
  )
}
