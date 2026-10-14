const mongoose = require("mongoose")

const connectDb = async () =>{
    try{
        const connect = await mongoose.connect("mongodb://testOnline:testOnline123@ac-bwo9oqh-shard-00-00.1c0qs0a.mongodb.net:27017,ac-bwo9oqh-shard-00-01.1c0qs0a.mongodb.net:27017,ac-bwo9oqh-shard-00-02.1c0qs0a.mongodb.net:27017/bookManagment?ssl=true&replicaSet=atlas-1qo7j1-shard-0&authSource=admin&appName=Cluster0")
        console.log("mongodb Connected")
    }
    catch(err){
            console.error("error"),
            process.exit(1)
    }
}

module.exports = connectDb;


// const mongoose = require("mongoose");
// require("dotenv").config(); // Dotenv load kora

// const connectDb = async () => {
//     try {
//         const connect = await mongoose.connect(process.env.MONGO_URI);
//         console.log("mongodb Connected");
//     } catch (err) {
//         console.error("error", err);
//         process.exit(1);
//     }
// }

// module.exports = connectDb;

