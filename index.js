import express from 'express';
import translateRoute from "./routes/translateRoute.js"
import cors from 'cors';


const PORT = 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.use('/translate', translateRoute);

app.listen(PORT, () => {
	console.log(`app is listening on PORT ${PORT}`);
})