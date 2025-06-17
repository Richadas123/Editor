
import { useState } from 'react';
import PropTypes from 'prop-types';
import { icons } from '../constants'; // Array of icon objects

const Sidebar = ({ onLanguageChange }) => {
  const [selectedLanguage, setSelectedLanguage] = useState('C'); // Default

  const handleLanguageClick = (language, filename, template) => {
    setSelectedLanguage(language);
    if (onLanguageChange) {
      onLanguageChange(language, filename, template);
    }
  };

  return (
    <div className="h-full px-1.5 w-16 flex flex-col bg-blue-300 text-white shadow-lg">
      <div className="flex flex-col items-center mt-2">
        {icons.map((item) => (
          <button
            key={item.id}
            onClick={() => handleLanguageClick(item.language, item.filename, item.template)}
            className={`p-3 mt-2 hover:bg-blue-200 rounded-lg ${
              selectedLanguage === item.language ? 'bg-white-300' : ''
            }`}
            aria-label={item.title}
            title={item.title}
          >
            <img
              src={item.icon}
              alt={`${item.title} icon`}
              width={item.width || 24}
              height={item.height || 24}
              draggable={false}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// PropTypes
Sidebar.propTypes = {
  onLanguageChange: PropTypes.func,
};

export default Sidebar;
