const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const corsOptions = {
  origin: 'https://verification-guddu.onrender.com',
  credentials: true,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.post('/verification', (req, res) => { 
  const verificationCode = req.body.verificationCode;
  const arrCode=verificationCode.split('');
  if (verificationCode.length < 6||arrCode[5]==7) {
    return res.json({ message: 'Verification Error' }); 
  }
  return res.json({ message: 'success' });
});

const port = 3000; 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
