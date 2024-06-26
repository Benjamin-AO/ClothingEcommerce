import React from 'react';
import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo} from '../../assets/crown.svg'
import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='nav-logo-container' to='/'> 
            <CrwnLogo className='logo' />
          </Link>

          <div className='nav-links-container'>
             <Link className='nav-link' to='/shop'>        {/*!!! #note that Link is the same as anchor tag <a> for hyperlink */}
                SHOP
            </Link>
          </div>

          <div className='nav-links-container'>
            <Link className='nav-link' to='/Sign-In'>
              SIGN-IN
            </Link>
          </div>

        </div>
        <Outlet />
      </Fragment>
    );
};


export default Navigation;