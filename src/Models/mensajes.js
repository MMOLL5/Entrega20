import Mongoose from 'mongoose';

const mensajesCollection = 'mensajes';

const MensajeSchema = new Mongoose.Schema({
    username: {type: String, require: true, max: 100},
    text: {type: String, require: true, max: 200},
    time: {type: Date, require: true}
}) 

export const mensajes = Mongoose.model(mensajesCollection, MensajeSchema);