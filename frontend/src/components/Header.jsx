

import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { logo } from '../assets';

const Header = ({ onRun, code }) => {
  const navigate = useNavigate();

  const handleDownload = () => {
    const content = code || '// No code to download';
    const file = new Blob([content], { type: 'text/plain' });
    const element = document.createElement('a');
    element.href = URL.createObjectURL(file);
    element.download = 'code.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // or sessionStorage if you use that
    navigate('/login');
  };

  return (
    <nav className="bg-blue-700 text-white shadow-lg p-3 flex justify-between items-center">
      {/* Left Section */}
      <div className="flex items-center">
        <img src={logo} alt="Logo" width={40} height={40} className="mr-2" />
        <h1 className="text-lg font-bold">Compiler</h1>

        <div className="h-8 border-l-2 border-white-400 mx-5"></div>

        <button
          onClick={onRun}
          className="flex items-center justify-center bg-pink-800 text-white font-medium px-4 py-2 w-28 rounded-md"
        >
          RUN
        </button>
        

        <div className="h-10 border-l-2 border-grey-500 mx-5"></div>

        <button onClick={handleDownload} className="hover:text-gray-300 text-sm px-4 py-2 w-28 rounded-md">
          Download Code
        </button>
      </div>

      {/* Right Section */}
      <div>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 w-28 rounded text-sm"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

// ✅ PropTypes validation
Header.propTypes = {
  onRun: PropTypes.func,
  code: PropTypes.string,
};

export default Header;
