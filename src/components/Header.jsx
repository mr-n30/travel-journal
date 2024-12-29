import logo from "../assets/images/earth-logo.png"
export default function Header() {
  return (
    <header>
      <nav>
        <img src={logo} alt="Travel Journal Logo" className="logo"/>
        <span className="brand-header-text">Travel Journal</span>
      </nav>
    </header>
  )
}
