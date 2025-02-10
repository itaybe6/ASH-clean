const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./api/routes/auth');
const costumerRoutes = require('./api/routes/costumer');
const workerRoutes = require('./api/routes/worker');
const managerRoutes = require('./api/routes/manager');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));
app.use('/auth', authRoutes);
app.use('/manager', managerRoutes);
app.use('/costumer', costumerRoutes);
app.use('/worker', workerRoutes);
const clientBuildPath = path.join(__dirname, '../dist');
app.use(express.static(clientBuildPath));
app.get('*', (req, res) => {
  res.sendFile(path.join(clientBuildPath, 'index.html'));
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
