// Configuración de la base de datos

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/vacaciones', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Base de datos conectada');
    } catch (error) {
        console.error('Error de conexión:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
