import HomePage from './frontend/HomePage';
import Aboutus from './frontend/Aboutus';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SearchCollege from './frontend/SearchCollege';
import SearchProjects from './frontend/SearchProjects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path ='/' element={<HomePage/>} />
      <Route path = '/aboutus' element={<Aboutus/>} />
      <Route path = '/searchCollege' element={<SearchCollege/>} />
      <Route path='/searchProjects' element={<SearchProjects/>} />
      </Routes>
    </BrowserRouter>
    // <SearchCollege/>
  );
}

export default App;