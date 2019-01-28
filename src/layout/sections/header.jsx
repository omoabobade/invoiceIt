import React from 'react';
import PropTypes from 'prop-types';

const Header = props => <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow"> 
<a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">{props.companyName}</a>
<ul className="navbar-nav px-3">
  <li className="nav-item text-nowrap">
    {/* <a className="nav-link" onClick={props.doSignout}>Sign out</a> */}
  </li>
</ul>
</nav>

Header.propTypes = {
 companyName: PropTypes.string.isRequired,
 doSignout: PropTypes.func.isRequired
}
Header.defaultProps = {
 companyName: 'InvoiceIt',
}

export default Header;