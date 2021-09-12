import mongoose from 'mongoose';
import * as model from '../Models/mensajes.js';

const URL = 'mongodb://localhost:27017/ecommerce'

class MensajesPersistencia {
  async add(data) {
    try {
        
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        })
        console.log('BD Conectada');

        const mensajeSaveModel = new model.mensajes(data);
        let mensajeSave = await mensajeSaveModel.save();

    } catch (error) {
        console.log(error);
    }
  }

}

export const Mensajes = new MensajesPersistencia();