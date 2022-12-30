import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import userRoutes from './routes/users'
import questionRoutes from './routes/Questions'
import answerRoutes from './routes/Answers'
import dotenv from 'dotenv'
import verification from './routes/verification'
import searchStackOverflow from './routes/searchStackOverflow'
import helmet from 'helmet'
import path from 'path'
import morgan from 'morgan'
import multer from 'multer'
import postRoutes from './routes/posts'
const app = express()

dotenv.config()
app.use(express.json({limit:'30mb',extended:true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(helmet());
app.use(morgan("common"));
mongoose.set('strictQuery', true)
app.get('/', (req, res) => {
    res.json("This is a stack overflow clone api")
    console.log('server fired up at port', PORT);
    console.log(req.protocol + '://' + req.get('host') + req.originalUrl)
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
const upload = multer({ storage: storage });
app.post("/upload", upload.single("file"), (req, res) => {
try {
    return res.status(200).send("File uploded successfully");
} catch (error) {
    console.error(error);
}
});

app.use("/images", express.static(path.join('~/Documents/Web Dev/stack-overflow-clone/server/', "public/images")));
app.use('/user',userRoutes)
app.use('/questions',questionRoutes)
app.use('/answer',answerRoutes)
app.use('/verify',verification)
app.use('/search',searchStackOverflow)
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL
mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Server fired up on ${PORT}`) }))
    .catch(err => console.log(err.message))