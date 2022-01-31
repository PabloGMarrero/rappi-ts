import mongoose from 'mongoose';
import config from '../config/default';

async function connect(){
    const dbURI:string = config.dbURI;
    const dbName:string = config.dbName;
    try
    {
        await mongoose.connect(dbURI, { dbName:dbName })
        console.info("Connected to database ", dbURI);
    } catch
    {
        console.error("Can not connect to database ", dbURI);
    }
}

export default connect;