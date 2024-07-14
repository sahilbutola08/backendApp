import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config();

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("Server is running at port ", process.env.PORT || 8000);
    });
})
.catch((err) => {
    console.warn("MongoDB connection failed!!", err);
});


/*
import express from "express"
const app = express();
(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", (e) => {
            console.log(e);
            throw e;
        })
        app.listen(process.env.PORT);
    } catch(e) {
        console.log("Error", e);
        throw err;
    }
})()
*/