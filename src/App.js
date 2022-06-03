import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/views/Home';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route path="/home" element={<Home/>}/>
    </Route>
  </Routes>     
  );
}

export default App;

