import HomePage from './frontend/HomePage';
import Aboutus from './frontend/Aboutus';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchCollege from './frontend/SearchCollege';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ='/' element={<HomePage/>} />
      <Route path = '/aboutus' element={<Aboutus/>} />
      </Routes>
    </BrowserRouter>
    // <SearchCollege/>
  );
}

export default App;