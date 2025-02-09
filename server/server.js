const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./api/routes/auth');
const custumerRoutes = require('./api/routes/costumer');
const workerRoutes = require('./api/routes/worker');
const managerRoutes = require('./api/routes/manager');
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/auth', authRoutes);
app.use('/manager', managerRoutes);
app.use('/customer', custumerRoutes);
app.use('/worker', workerRoutes);
const deleteOldCleanings = require('./api/cleaningJob');
setInterval(deleteOldCleanings, 24 * 60 * 60 * 1000); 
const PORT = process.env.PORT ||5000;
app.listen(PORT, () => {});