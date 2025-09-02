import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, LogOut, User, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LogoutModal from './LogoutModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { user, logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    if (!dropdownOpen) return;
    function handleClick(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [dropdownOpen]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/about' },
    { name: 'Enrôlement', path: '/enrollments' },
    { name: 'Plateformes', path: '/platforms' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  const handleLogout = () => {
    setShowLogoutModal(true);
    setIsOpen(false);
    setDropdownOpen(false);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  // Helper for user photo fallback
  const getUserPhoto = () => {
    if (user?.photoURL) return user.photoURL;
    if (user?.avatar) return user.avatar;
    // fallback: initials avatar
    if (user?.name) {
      return `https://ui-avatars.com/api/?name=${encodeURIComponent(
        user.name
      )}&background=16a34a&color=fff&bold=true`;
    }
    return 'https://ui-avatars.com/api/?name=U&background=16a34a&color=fff&bold=true';
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="https://res.cloudinary.com/drxouwbms/image/upload/v1755777328/369470771_801733008414799_8805271754561376909_n_c4laj2.jpg"
                alt="BAY SA WARR Logo"
                className="w-10 h-10 rounded-xl object-cover"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">BAY SA WARR</h1>
                <p className="text-xs text-gray-600">Valoriser la création locale</p>
              </div>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-green-600 ${
                    location.pathname === item.path
                      ? 'text-green-600 border-b-2 border-green-600 pb-1'
                      : 'text-gray-700'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <User size={16} />
                    <span>Dashboard</span>
                  </Link>
                  {/* User Profile Dropdown */}
                  <div className="relative" ref={dropdownRef}>
                    <button
                      className="flex items-center space-x-2 focus:outline-none"
                      onClick={() => setDropdownOpen((open) => !open)}
                      aria-haspopup="true"
                      aria-expanded={dropdownOpen}
                    >
                      <img
                        src={getUserPhoto()}
                        alt={user.name || 'User'}
                        className="w-9 h-9 rounded-full object-cover border-2 border-green-600"
                      />
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${
                          dropdownOpen ? 'rotate-180' : ''
                        } text-gray-500`}
                      />
                    </button>
                    <AnimatePresence>
                      {dropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.18 }}
                          className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-gray-100 z-50"
                        >
                          <div className="px-4 py-4 flex items-center space-x-3 border-b border-gray-100">
                            <img
                              src={getUserPhoto()}
                              alt={user.name || 'User'}
                              className="w-12 h-12 rounded-full object-cover border-2 border-green-600"
                            />
                            <div>
                              <div className="font-semibold text-gray-900 text-base truncate max-w-[120px]">
                                {user.name || 'Utilisateur'}
                              </div>
                              {user.role && (
                                <span className="inline-block mt-1 px-2 py-0.5 text-xs font-semibold rounded bg-green-100 text-green-700">
                                  {user.role}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="py-2">
                           
                            <button
                              onClick={handleLogout}
                              className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                              <LogOut size={16} className="mr-2" />
                              Se déconnecter
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-green-700 transition-colors duration-200"
                >
                  Login
                </Link>
              )}
            </div>

            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.path
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {user ? (
                <div className="space-y-3 pt-4 border-t border-gray-200">
                  <Link
                    to="/dashboard"
                    className="block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    Dashboard
                  </Link>
                  {/* User info in mobile menu */}
                  <div className="flex items-center space-x-3 px-4 py-2">
                    <img
                      src={getUserPhoto()}
                      alt={user.name || 'User'}
                      className="w-9 h-9 rounded-full object-cover border-2 border-green-600"
                    />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm truncate max-w-[100px]">
                        {user.name || 'Utilisateur'}
                      </div>
                      {user.role && (
                        <span className="inline-block mt-0.5 px-2 py-0.5 text-xs font-semibold rounded bg-green-100 text-green-700">
                          {user.role}
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-gray-700 hover:text-red-600 transition-colors duration-200 text-center"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Logout Confirmation Modal */}
      <LogoutModal
        isOpen={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onConfirm={confirmLogout}
      />
    </>
  );
};

export default Navbar;