
// Route imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// NavBar
import Container from './components/layout/Container';
import NavBar from './components/navbar/NavBar';

// Pages
import HonorableMention from './components/pages/HonorableMention';
import Experience from './components/pages/Experience';
import Home from './components/pages/Home';
import Footer from './components/navbar/Footer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min_height">
        <Routes>
        <Route exact path="/" element={<Home />} > </Route>
          <Route path="/website" element={<Home />} > </Route>
          <Route path="/experience" element={<Experience />} > </Route>
          <Route path="/honorablemention" element={<HonorableMention />} > </Route>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
