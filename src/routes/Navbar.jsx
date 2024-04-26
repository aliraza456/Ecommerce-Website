import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import CartIcon from "../Components/CartIcon";
import CaartDropDown from "../Components/CaartDropDown";
import { ReactComponent as CrwnLogo } from "../assets/crown.svg";
import { UserContext } from "../context/UserContext";
import { CartContext } from "../context/CartContext";
import signOutUser from '../utilities/Firebase'
import "./navigation.styles.scss";

const Navbar = () => {
 const { currentUser} = useContext(UserContext);
 const { isCartOpen } = useContext(CartContext);




  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        { isCartOpen && <CaartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
