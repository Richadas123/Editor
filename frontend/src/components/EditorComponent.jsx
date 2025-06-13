
// import  { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import Editor from '@monaco-editor/react';
// import { runCode } from '../compiler/script';

// const EditorComponent = ({ onRun, language = 'javascript', filename = 'main.js', codeTemplate = '' }) => {
//   const [code, setCode] = useState(codeTemplate);
//   const [input, setInput] = useState('// Input your data here');
//   const [output, setOutput] = useState('// Output will appear here');

//   const handleEditorChange = (value) => setCode(value);
//   const handleInputChange = (value) => setInput(value);

//   const run = () => runCode(code, language, setOutput, input);

//   useEffect(() => {
//     if (onRun) {
//       onRun(run);
//     }
//   }, [onRun]);

//   useEffect(() => {
//     setCode(codeTemplate);
//   }, [codeTemplate]);

//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex flex-row h-full">
//         {/* Code Editor */}
//         <div className="flex-1 bg-grey-800 text-white border-r border-gray-800">
//           <div className="bg-blue-900 text-white flex items-center p-3">
//             <div className="mr-4 font-bold">{filename}</div>
//           </div>
//           <Editor
//             height="92%"
//             language={language?.toLowerCase()}
//             value={code}
//             theme="vs-dark"
//             onChange={handleEditorChange}
//             options={{
//               fontSize: 14,
//               minimap: { enabled: false },
//               scrollBeyondLastLine: false,
//             }}
//           />
//         </div>

//         {/* Input/Output Editors */}
//         <div className="flex-1 bg-grey-800 text-white flex flex-col">
//           <div className="bg-blue-900 text-white flex items-center p-3">
//             <div className="mr-4 font-bold">Input</div>
//           </div>
//           <Editor
//             height="40%"
//             value={input}
//             theme="vs-dark"
//             onChange={handleInputChange}
//             options={{ fontSize: 14 }}
//           />

//           <div className="bg-blue-900 text-white flex items-center p-3">
//             <div className="mr-4 font-bold">Output</div>
//           </div>
//           <Editor
//             height="52%"
//             value={output}
//             theme="vs-black"
//             options={{ readOnly: true, fontSize: 14 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// // ✅ PropTypes validation
// EditorComponent.propTypes = {
//   onRun: PropTypes.func,
//   language: PropTypes.string,
//   filename: PropTypes.string,
//   codeTemplate: PropTypes.string,
// };

// export default EditorComponent;




import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Editor from '@monaco-editor/react';
import { runCode } from '../compiler/script';

const EditorComponent = ({ onRun, language = 'javascript', filename = 'main.js', codeTemplate = '' }) => {
  const [code, setCode] = useState(codeTemplate);
  const [input, setInput] = useState('// Input your data here');
  const [output, setOutput] = useState('// Output will appear here');

  const handleEditorChange = (value) => setCode(value);
  const handleInputChange = (value) => setInput(value);

  const run = () => {
    console.log('Running with language:', language);
    runCode(code, language, setOutput, input);
  };

  useEffect(() => {
    if (onRun) onRun(run);
  }, [onRun, code, language, input]);

  useEffect(() => {
    setCode(codeTemplate);
  }, [codeTemplate, language]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-row h-full">
        {/* Code Editor */}
        <div className="flex-1 bg-grey-800 text-white border-r border-gray-800">
          <div className="bg-blue-900 text-white flex items-center p-3">
            <div className="mr-4 font-bold">{filename}</div>
          </div>
          <Editor
            height="92%"
            language={language?.toLowerCase()}
            value={code}
            theme="vs-dark"
            onChange={handleEditorChange}
            options={{ fontSize: 14, minimap: { enabled: false }, scrollBeyondLastLine: false }}
          />
        </div>

        {/* Input/Output Editors */}
        <div className="flex-1 bg-grey-800 text-white flex flex-col">
          <div className="bg-blue-900 text-white flex items-center p-3">
            <div className="mr-4 font-bold">Input</div>
          </div>
          <Editor height="40%" value={input} theme="vs-dark" onChange={handleInputChange} options={{ fontSize: 14 }} />

          <div className="bg-blue-900 text-white flex items-center p-3">
            <div className="mr-4 font-bold">Output</div>
          </div>
          <Editor height="52%" value={output} theme="vs-black" options={{ readOnly: true, fontSize: 14 }} />
        </div>
      </div>
    </div>
  );
};

EditorComponent.propTypes = {
  onRun: PropTypes.func,
  language: PropTypes.string,
  filename: PropTypes.string,
  codeTemplate: PropTypes.string,
};

export default EditorComponent;
