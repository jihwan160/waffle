
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import New from './Pages/Menu/New';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/new' element={<New />} />
      </Routes>
    </>
  );
}

export default App;
