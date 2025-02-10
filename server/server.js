const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
<<<<<<< HEAD
const path = require('path'); // כדי להגיש את צד הלקוח

// ייבוא ראוטים
=======
>>>>>>> e03640e2f15bd6823465ce958db551a558ee96fd
const authRoutes = require('./api/routes/auth');
const costumerRoutes = require('./api/routes/costumer');
const workerRoutes = require('./api/routes/worker');
const managerRoutes = require('./api/routes/manager');
<<<<<<< HEAD

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

// התחברות למסד הנתונים MongoDB
=======
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
>>>>>>> e03640e2f15bd6823465ce958db551a558ee96fd
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

<<<<<<< HEAD
// שימוש בנתיבים של ה-API
=======
>>>>>>> e03640e2f15bd6823465ce958db551a558ee96fd
app.use('/auth', authRoutes);
app.use('/manager', managerRoutes);
app.use('/costumer', costumerRoutes);
app.use('/worker', workerRoutes);
<<<<<<< HEAD

const clientBuildPath = path.join(__dirname, '../dist'); 
app.use(express.static(clientBuildPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});

// הגדרת פורט
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
=======
const deleteOldCleanings = require('./api/cleaningJob');
setInterval(deleteOldCleanings, 24 * 60 * 60 * 1000); 
const PORT = process.env.PORT ||5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
>>>>>>> e03640e2f15bd6823465ce958db551a558ee96fd
});
