import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const SideBar = props=><nav className="col-md-2 d-none d-md-block bg-light sidebar">
      <div className="sidebar-sticky">
        <ul className="nav flex-column">
          {
            props.menus.map((menuItem, i)=> <li className="nav-item" key={i}>
                <Link className="nav-link" to={menuItem.to}>
                  <span data-feather={menuItem.icon}></span>
                  {menuItem.title}
                </Link>
          </li> )
          }
        </ul>
      </div>
    </nav>

SideBar.propTypes = {
    menus: PropTypes.array.isRequired
}
   
export default SideBar;