import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path='/'>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;