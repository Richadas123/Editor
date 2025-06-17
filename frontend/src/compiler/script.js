
import axios from 'axios';

//Environment variable (VITE_API_URL) set in .env file
const API_BASE = import.meta.env.VITE_API_URL;

export const runCode = async (code, language, setOutput, input) => {
  setOutput('// Running...');

  try {
    const response = await axios.post(`${API_BASE}/api/judge/run`, {
      code,
      language,
      input,
    });

    const result = response.data;

    if (result.stderr) {
      setOutput(atob(result.stderr));
    } else if (result.compile_output) {
      setOutput(atob(result.compile_output));
    } else {
      setOutput(atob(result.stdout || '') || '// No output');
    }
  } catch (error) {
    console.error('Execution error:', error);
    setOutput('// Error while running code');
  }
};
