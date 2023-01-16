import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';
import authRoute from './Routes/AuthRoute.js';
import userRoute from './Routes/UserRoute.js';
import teachingRoute from './Routes/TeachingsRoute.js';
import eventRoute from './Routes/EventRoute.js';
import videoRoute from './Routes/VideoRoute.js'
import audioRoute from './Routes/AudioRoute.js'
import commentRoute from './Routes/CommentRoute.js';
dotenv.config();

const app = express();
const port = process.env.PORT || 5001

app.use(express.json());
app.use(cors());

app.use('/auth', authRoute);
app.use('/user', userRoute);
app.use('/teaching', teachingRoute);
app.use('/event', eventRoute);
app.use('/video', videoRoute);
app.use('/audio', audioRoute);
app.use('/comment', commentRoute);

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(port, () => {
        console.log(`Connected and listening on port ${port}`)
    })
})
.catch((error) => {
  throw error
});



