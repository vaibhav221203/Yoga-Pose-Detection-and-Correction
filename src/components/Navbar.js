import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase'; 
import { signOut, onAuthStateChanged } from 'firebase/auth';
import './Navbar.css';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/signin'); 
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <nav className="navbar">
      <h1>Yoga Pose Detection and Correction</h1>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        {isAuthenticated ? (
          <button className="navbar__button" onClick={handleSignOut}>
            Sign Out
          </button>
        ) : (
          <Link to="/signin">
            <button className="navbar__button">Sign In</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
