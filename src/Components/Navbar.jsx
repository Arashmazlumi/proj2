function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        MyDashboard
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Analytics</a>
        <a href="#">About</a>
      </div>

      <button className="login-btn">
        Login
      </button>

    </nav>
  );
}

export default Navbar;