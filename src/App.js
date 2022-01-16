import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import NotFoundpage from './pages/NotFoundPage';
import UsersPage from './pages/UsersPage';

import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';

function App() {

  return(
    <Router>
      <Navbar />
      
        <Routes>
          <Route path="/" element={<h1>Este es home</h1>}/>
          <Route path='/home' element={<HomePage />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path="/users/:id" element={<UsersPage />} />
          <Route path="*" element={<NotFoundpage />} />
          <Route path='/dashboard/*' element={<DashboardPage />}>
                <Route path="welcome" element={<h1>Welcome</h1>} />
          </Route>
        </Routes>
    </Router>
  );
}

export default App;
