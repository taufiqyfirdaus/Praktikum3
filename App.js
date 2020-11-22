import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Pegawai from './Component/Pegawai';
function App() {
  return (
      <Router>
        <Link to="/pegawai" className="nav-link">Daftar Pegawai</Link>
        <Switch>
          <Route path="/pegawai">
            <Pegawai />
          </Route>
        </Switch>
      </Router>
  );
}

export default App;