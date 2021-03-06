import React from 'react';
import SidebarContainer from "./containers/SidebarContainer";
import ProductListContainer from "./containers/ProductListContainer";
import BasketContainer from "./containers/BasketContainer";

import './App.css';

function App() {
  return (
    <div className="container-fluid">
      <BasketContainer />
      <div className="row">
        <div className="col-md-3 col-sm-3">
          <SidebarContainer/>
        </div>
	      <div className="col-md-9 col-sm-9">
          <ProductListContainer/>
	      </div>
      </div>
    </div>
  );
}

export default App;
