

// import React, { useState, useEffect } from 'react';
// import Editor from '@monaco-editor/react';
// import { runCode } from '.src/compiler/script';

// const EditorComponent = ({ onRun, language, filename, codeTemplate }) => {
//   const [code, setCode] = useState(codeTemplate);
//   const [input, setInput] = useState('// Input your data here');
//   const [output, setOutput] = useState('// Output will appear here');

//   const handleEditorChange = (value) => {
//     setCode(value);
//   };

//   const handleInputChange = (value) => {
//     setInput(value);
//   };

//   const run = () => {
//     runCode(code, language, setOutput, input);
//   };

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
//         {/* Code Section */}
//         <div className="flex-1 bg-gray-800 text-white border-r border-gray-800">
//           <div className="bg-gray-900 text-white flex items-center p-3">
//             <div className="mr-4 font-bold">{filename}</div>
//           </div>
//           <Editor
//             height="92%"
//             language={language.toLowerCase()}
//             value={code}
//             theme="vs-dark"
//             onChange={handleEditorChange}
//           />
//         </div>

//         {/* Input/Output Section */}
//         <div className="flex-1 bg-gray-800 text-white flex flex-col">
//           <div className="bg-gray-900 text-white flex items-center p-3">
//             <div className="mr-4 font-bold">Input</div>
//           </div>
//           <Editor
//             height="40%"
//             value={input}
//             theme="vs-dark"
//             onChange={handleInputChange}
//           />

//           <div className="bg-gray-900 text-white flex items-center p-3">
//             <div className="mr-4 font-bold">Output</div>
//           </div>
//           <Editor
//             height="52%"
//             value={output}
//             theme="vs-dark"
//             options={{ readOnly: true }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditorComponent;





// import axios from 'axios';

// export const runCode = async (code, language, setOutput, input) => {
//   setOutput('// Running...');

//   // Language mapping from friendly name to Judge0 language ID
//   const languageMap = {
//     javascript: 63,
//     python: 71,
//     cpp: 54,
//     c: 50,
//     java: 62,
//   };

//   const languageId = languageMap[language.toLowerCase()];
//   if (!languageId) {
//     setOutput('// Unsupported language selected');
//     return;
//   }

//   const encodedSourceCode = btoa(code);     // Base64 encode the code
//   const encodedInput = btoa(input || '');   // Base64 encode the input

  // try {
  //   const response = await axios.post(
  //     'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true',
  //     {
  //       source_code: encodedSourceCode,
  //       language_id: languageId,
  //       stdin: encodedInput,
    //   },
    //   {
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
    //       'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY_HERE', // Replace this with your actual API key
    //     },
    //   }
    // );



//     const response = await axios.post(
//       'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true',
//       {
//       source_code: encodedSourceCode,
//       language_id: languageId,
//       stdin: encodedInput,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
//           'X-RapidAPI-Key': '4321be2411msh5ee9362af1696fap136e81jsn1d00f7336555', // ✅ Use your real key
//         },
//       }
//     );

//     const result = response.data;

//     if (result.stderr) {
//       setOutput(atob(result.stderr));
//     } else if (result.compile_output) {
//       setOutput(atob(result.compile_output));
//     } else {
//       setOutput(atob(result.stdout || '') || '// No output');
//     }
//   } catch (error) {
//     console.error(error);
//     setOutput('// Error while running code');
//   }
// };


import axios from 'axios';

export const runCode = async (code, language, setOutput, input) => {
  setOutput('// Running...');

  // Language mapping from Judge0 API
  const languageMap = {
    javascript: 63,
    python: 71,
    cpp: 54,
    c: 50,
    java: 62,
    // csharp: 51, // optional: only if you add this support
  };

  const languageId = languageMap[language.toLowerCase()];
  if (!languageId) {
    setOutput('// Unsupported language selected');
    return;
  }

  const encodedSourceCode = btoa(code);
  const encodedInput = btoa(input || '');

  try {
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true',
      {
        source_code: encodedSourceCode,
        language_id: languageId,
        stdin: encodedInput,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
          'X-RapidAPI-Key': '9e60487916msh46b02282c30d596p1f7d57jsn635a973ffa9b', 
        },
      }
    );

    const result = response.data;

    if (result.stderr) {
      setOutput(atob(result.stderr));
    } else if (result.compile_output) {
      setOutput(atob(result.compile_output));
    } else {
      setOutput(atob(result.stdout || '') || '// No output');
    }
  } catch (error) {
    console.error(error);
    setOutput('// Error while running code');
  }
};




// import axios from 'axios';

// export const runCode = async (code, language, setOutput, input) => {
//   setOutput('// Running...');

//   const languageMap = {
//     javascript: 63,
//     python: 71,
//     cpp: 54,
//     c: 50,
//     java: 62,
//   };

//   const langKey = language.toLowerCase();
//   const languageId = languageMap[langKey];
//   if (!languageId) {
//     console.error('Unsupported language selected:', language);
//     setOutput(`// Unsupported language selected: ${language}`);
//     return;
//   }

//   const encodedSourceCode = btoa(code);
//   const encodedInput = btoa(input || '');

//   try {
//     const response = await axios.post(
//       'https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=true&wait=true',
//       {
//         source_code: encodedSourceCode,
//         language_id: languageId,
//         stdin: encodedInput,
//       },
//       {
//         headers: {
//           'Content-Type': 'application/json',
//           'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
//           'X-RapidAPI-Key': '5f2ac6b938msh397ab19da1affd3p1f8f97jsn68d1d1d52bf2', // Replace with your key
//         },
//       }
//     );

//     const result = response.data;

//     if (result.stderr) {
//       setOutput(atob(result.stderr));
//     } else if (result.compile_output) {
//       setOutput(atob(result.compile_output));
//     } else {
//       setOutput(atob(result.stdout || '') || '// No output');
//     }
//   } catch (error) {
//     console.error(error);
//     setOutput('// Error while running code');
//   }
// };

