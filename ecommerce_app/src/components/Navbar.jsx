import { Link } from "react-router-dom";
import { useContext } from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../redux/selectors";
import { LanguageContext } from "../contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const cartItems = useSelector(selectCartItems);
  const handleLangChange = (e) => {
    setLanguage(e.target.value);
  };

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">Ecommerce</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link position-relative" to="/cart">
              Cart
              {totalCount > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: '0.75rem' }}
                >
                  {totalCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
        <select className="form-select w-auto" value={language} onChange={handleLangChange}>
          <option value="en">English</option>
          <option value="ar">العربية</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
