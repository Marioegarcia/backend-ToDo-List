const { Schema, model } = require('mongoose');

const TaskSchema = Schema({
    titulo: {
        type: String,
        required: [true, 'El titulo es obligatorio']
    },
    colaboradores: [{ type: String }],
    done: {
        type: Boolean,
        default: false
    },
    create_at: {
        type: Date,
    },
    date_end: {
        type: Date,
    },
   
});





module.exports = model( 'Task', TaskSchema );