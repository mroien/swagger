import express from 'express';
import bodyParser from 'body-parser';
import petsRoutes from './src/API/routes/pets.mjs';

const app = express();
const PORT = 5555;

app.use(bodyParser.json());

app.use('/pets', petsRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Homepage');
});

app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));

