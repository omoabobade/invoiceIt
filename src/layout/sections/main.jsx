import React from 'react';


const Main = props=>
  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4"> 
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
      {props.children}
    </div>
  </main>

   
export default Main;