import mongoose from 'mongoose';
import * as model from '../Models/productos.js';

const URL = 'mongodb://localhost:27017/ecommerce';

class ProductosPersistencia {
  async getAll() {
    return await model.productos.find();

  }

  async get(id) {
    try {
        
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        })
        console.log('BD Conectada');

        return await model.productos.find({title: id});

    } catch (error) {
        console.log(error);
    }
  }

  async add(data) {
    try {
        
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        })
        console.log('BD Conectada');

        const productoSaveModel = new model.productos(data);
        let productoSave = await productoSaveModel.save();

    } catch (error) {
        console.log(error);
    }
  }

  async update(id, data) {
    try {
        
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        })
        console.log('BD Conectada');

        let productoUpdate = await model.productos.updateOne({title: id}, {$set: {title: data.title, precio: data.precio, thumbnail: data.thumbnail}});

    } catch (error) {
        console.log(error);
    }
  }

  async delete(id) {
    try {
        
        let rta = await mongoose.connect(URL, {
            useNewUrlParser: true,
            UseUnifiedTopology: true
        })
        console.log('BD Conectada');

        let productoDelete = await model.productos.deleteOne({title: id});

    } catch (error) {
        console.log(error);
    }
  }

  async query(query) {
    return mySQLDB.from('productos').where(query);
  }
}

export const ProductosDB = new ProductosPersistencia();