// db.js

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;


module.exports.dbURI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
module.exports.dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false,
    //reconnectTries: Number.MAX_VALUE,
    //reconnectInterval: 500,
    connectTimeoutMS: 10000,
};
//console.log('---db hostname is: ',MONGO_HOSTNAME, MONGO_USERNAME, MONGO_DB, MONGO_PASSWORD, MONGO_PORT)
// export { dbURI, dbOptions };