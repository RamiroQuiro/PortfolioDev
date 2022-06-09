import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/views/Home';

function App() {
  return (
  <Routes>
    <Route  element={<Layout />}>
      <Route path="/" index element={<Home/>}/>
    </Route>
  </Routes>     
  );
}

export default App;

