import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

function App() {
  return (
    <div className="App">
     <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#home">Filming In Chicago</a>
      </nav>
      <main className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            Col A
          </div>
          <div className="col-md-6">
            Col B
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
