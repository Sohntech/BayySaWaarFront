import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import {  AnimatePresence } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Enrollments from './pages/Enrollments';
import DashboardWrapper from './components/DashboardWrapper';
import Platforms from './pages/Platforms';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import ScrollToTop from './components/ScrollToTop';
import ProtectedRoute from './components/ProtectedRoute';

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`${isLoginPage ? '' : 'pt-16'} min-h-screen bg-gray-50 font-sans`}>
      <ScrollToTop />
      {!isLoginPage && <Navbar />}
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enrollments" element={<Enrollments />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardWrapper />
            </ProtectedRoute>
          } />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AnimatePresence>
      {!isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;