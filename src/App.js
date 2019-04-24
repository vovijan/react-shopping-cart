import React from 'react';
import './App.css';
import Sidebar from "./components/Sidebar";
import ProductListContainer from "./containers/ProductListContainer";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-3">
          <Sidebar/>
        </div>
	      <div className="col-md-9 col-sm-9">
          <ProductListContainer/>
	      </div>
      </div>
    </div>
  );
}

export default App;
