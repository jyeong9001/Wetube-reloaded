import express from "express" ;
import morgan from "morgan" ;
import globalRouter from './routers/globalRouter';
import videoRouter from './routers/videoRouter';
import userRouter from './routers/userRouter';

const PORT = 4000;

const app = express();
const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({extended:true}))

const home = (req, res) => {
    console.log("I will respond");
    return res.send("hello");
};

const handleHome = (req, res) => {
    return res.send("login");
};

app.set("view engine", "pug");
app.set("views",process.cwd() + "/src/views");
app.use("/",globalRouter);
app.use("/videos",videoRouter);
app.use("/user",userRouter);



const handleListening = () => console.log(`Server listening on port http://localhost:${PORT} 🚀`);

app.listen(PORT, handleListening);