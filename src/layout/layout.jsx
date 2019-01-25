import React from 'react';
import PropTypes from 'prop-types';
import Header from './sections/header.jsx';
import SideBar from './sections/sidebar.jsx';
import Main from './sections/main.jsx';
import { Switch, Route } from 'react-router-dom'
import AllRoutes from './allroutes.jsx'
import Footer from './sections/footer.jsx';

class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    filteredMenu(){
        return AllRoutes.filter(r=> r.title != null)
    }
    
    doSignout(){
        return "";
    }


    render() {
        let menus = this.filteredMenu();
        return (
            <div>
                <Header doSignout={this.doSignout}/>
                <div className="container-fluid">
                    <SideBar menus={menus} />
                    <Main>
                        <Switch>
                            {
                                AllRoutes.map((route, i)=> <Route exact path={route.to} key={i} component={route.component}/>)
                            }
                        </Switch>
                    </Main>
                </div>
            </div>
        )
    }
}

export default Layout;