const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config');
const bookRoutes = require('./routes/bookRoutes');
const contacsRoutes = require('./routes/contacsRoutes');
const cors = require("cors")
const app = express();
const PORT = 8000;


app.use(cors())
// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/books', bookRoutes);
app.use('/api', contacsRoutes);


// Sinkronisasi database dan mulai server
sequelize.sync({ force: false }) // Set `true` untuk reset database mode dev
  .then(() => {
    console.log('Database synced successfully.');
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((error) => console.error('Unable to sync database:', error))