// import logo from './logo.svg';
import { Routes, Route, Link, Outlet } from 'react-router-dom'
import './App.css';

import ComputerView from './pages/computer-view';
import ComputerEdit from './pages/computer-edit';
import data from './data.json'
import Counter from './pages/counter';

function App() {
  // const menu = {
  //   padding: '20px',
  //   textDecoration: "none",
  //   fontSize: "1.1em"
  // }


  return (
    <div className="App">
      <header className="App-header">
        <h3 className='mt-5'>Computers Control Panel - <Counter /> </h3>
        <nav>
          <Link to='/computer-view' className='menuItem'> View </Link>
          <Link to='/' className="menuItem"> Contact </Link>
        </nav>
        
      </header>

      <section>


        <Routes>
          <Route path='/computer-view' element={<ComputerView dbs={data} />} />
          <Route path='/computer-edit/:id' element={<ComputerEdit dbs={data} />} />
        </Routes>

        <Outlet />
      </section>

    </div>
  );
}

export default App;
