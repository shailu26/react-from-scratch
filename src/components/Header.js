import Logo from '../../asset/img/logo.gif';

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
