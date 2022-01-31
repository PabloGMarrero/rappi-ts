export default {
    port: parseInt(`${process.env.PORT}`, 10) || 3000 ,
    url: process.env.URL || "http://localhost",
    dbURI: process.env.DB_URI || " mongodb://127.0.0.1:27017",
    dbName: process.env.DB_NAME  || "rappi" 
}