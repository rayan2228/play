
import { app } from './app.js'
import connectDB from './db/index.js'


connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`SERVER RUNNING ${process.env.PORT}`);
    })
}).catch((error) => {
    console.error(`MONGODB ERROR ${error}`);
})