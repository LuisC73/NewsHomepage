import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <header className="header">
      <nav className="navbar">
        <figure className="navbar__figure">
          <img src={logo} alt="logo" className="navbar__img" />
        </figure>
        <ul className="navbar__ul">
          <li className="navbar__li">Home</li>
          <li className="navbar__li">New</li>
          <li className="navbar__li">Popular</li>
          <li className="navbar__li">Trending</li>
          <li className="navbar__li">Categories</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
