const mongoose = require('mongoose');



const dbConnection = async() => {

    try {

        await mongoose.connect( `mongodb+srv://mariodb:warioegh92@proyectos-mario.svchx.mongodb.net/todo?retryWrites=true&w=majority`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    
        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}



module.exports = {
    dbConnection
}