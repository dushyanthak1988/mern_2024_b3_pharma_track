
const express = require('express'); 
const cors = require('cors');
const connectDB = require('./Database/connect');
const userRoutes = require('./routes/users.rout');
const medicineRoutes = require('./routes/medicines.rout'); 
require('dotenv').config();
//const MONGODB_URL = "mongodb+srv://pharmatrack:<password>@pharmatrack.o3x8qlk.mongodb.net/pharmatrack"
//connectDB(MONGODB_URL);
connectDB(process.env.MONGODB_URL);

const app = express();
app.use(cors());
app.use(express.json()); 
app.use('/api/users', userRoutes);
app.use('/api/medicines', medicineRoutes); 

const PORT = 3003;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));