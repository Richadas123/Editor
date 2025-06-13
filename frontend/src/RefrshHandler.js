import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function RefrshHandler({ setIsAuthenticated, setAuthChecked }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsAuthenticated(false);
        setAuthChecked(true);
        return;
      }

      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        if (!apiUrl) {
          throw new Error("VITE_API_URL is not defined. Check your .env file.");
        }

        const res = await fetch(`${apiUrl}/auth/verify`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        if (result.success) {
          setIsAuthenticated(true);

          // Redirect to editor only if you're on login/signup/home
          const isAuthPage =
            location.pathname === '/' ||
            location.pathname === '/login' ||
            location.pathname === '/signup';

          if (isAuthPage) {
            navigate('/EditorComponent');
          }
        } else {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error(' Token verification failed:', error);
        localStorage.removeItem('token');
        setIsAuthenticated(false);
      } finally {
        setAuthChecked(true);
      }
    };

    verifyToken();
  }, [location.pathname, navigate, setIsAuthenticated, setAuthChecked]);

  return null;
}

RefrshHandler.propTypes = {
  setIsAuthenticated: PropTypes.func.isRequired,
  setAuthChecked: PropTypes.func.isRequired,
};

export default RefrshHandler;
