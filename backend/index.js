// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const AuthRouter = require('./Routes/AuthRouter');



// require('dotenv').config();
// require('./Models/db');
// const PORT = process.env.PORT || 5000;

// const JudgeRouter = require('./Routes/JudgeRouter');
// app.use('/api/judge', JudgeRouter);

// app.use(bodyParser.json());
// app.use(cors());
// app.use('/auth', AuthRouter);



// app.listen(PORT, () => {
//     console.log(`Server is running on ${PORT}`)
// })



const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const JudgeRouter = require('./Routes/JudgeRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 5000;

// ✅ Middleware first
app.use(cors());
app.use(bodyParser.json());

// ✅ Then routes
app.use('/auth', AuthRouter);
app.use('/api/judge', JudgeRouter);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
