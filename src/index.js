
const app = require('./server')
require('dotenv').config()
const { dbConnection } = require('../src/database/config')
const PORT = process.env.PORT;

app.get('/', (req,res) => res.send('API ejercicio ripley'));
app.listen(process.env.PORT, async () => {
  await dbConnection();
  console.log(`server corriendo en https://localhost:${PORT}`);
});

