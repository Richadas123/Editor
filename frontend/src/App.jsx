import { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import Login from './pages/Login';
import Signup from './pages/Signup';
import RefrshHandler from './RefrshHandler';
import PropTypes from 'prop-types';

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import EditorComponent from './components/EditorComponent';

// PrivateRoute component to protect routes
const PrivateRoute = ({ isAuthenticated, element }) => {
  return isAuthenticated ? element : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  element: PropTypes.element.isRequired,
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false); // To avoid flickering
  const runCodeRef = useRef(null);

  // Editor state
  const [language, setLanguage] = useState('C');
  const [filename, setFilename] = useState('main.c');
  const [codeTemplate, setCodeTemplate] = useState(`#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n}`);

  const handleRun = () => {
    if (runCodeRef.current) runCodeRef.current();
  };

  const handleLanguageChange = (newLang, newFilename, newTemplate) => {
    setLanguage(newLang);
    setFilename(newFilename);
    setCodeTemplate(newTemplate);
  };


//   const handleLanguageChange = (newLang, newFilename, newTemplate) => {
//   setLanguage(newLang);

//   // Always use HelloWorld.java if Java is selected
//   if (newLang === 'java') {
//     setFilename('HelloWorld.java');
//   } else {
//     setFilename(newFilename);
//   }

//   setCodeTemplate(newTemplate);
// };


  // Editor layout
  const EditorPage = (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header onRun={handleRun} code={codeTemplate} />
      <div className="flex flex-grow">
        <Sidebar onLanguageChange={handleLanguageChange} />
        <main className="flex-grow">
          <EditorComponent
            onRun={(run) => (runCodeRef.current = run)}
            language={language}
            filename={filename}
            codeTemplate={codeTemplate}
          />
        </main>
      </div>
    </div>
  );

  return (
    <div className="App">
      {/*On refresh, this checks if token exists and updates auth state */}
      <RefrshHandler
        setIsAuthenticated={setIsAuthenticated}
        setAuthChecked={setAuthChecked}
      />

      {/*Only load routes after auth check is done */}
      {authChecked && (
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/EditorComponent"
            element={<PrivateRoute isAuthenticated={isAuthenticated} element={EditorPage} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;


