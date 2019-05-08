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
        <div className="col-md-2 col-sm-2">
          <SidebarContainer/>
        </div>
	      <div className="col-md-10 col-sm-10">
          <ProductListContainer/>
	      </div>
      </div>
    </div>
  );
}

export default App;
