require('dotenv').config();
const mongoose = require('mongoose');
mongoose.connect(
    process.env.MONGODB_URI
)

const db = mongoose.connection;

db.once("open", () => {
    console.log("Succesfully Connected")
});

