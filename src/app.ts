import { Application, json } from 'express';
import cors from 'cors';
import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './helpers/db-connection';

// Routers
import UserRouter from './routes/user-routes';
import FamilyRouter from './routes/family-routes';

dotenv.config();

connectToDb();

const app: Application = express();
const port = 3000;

app.use(json());
app.use(cors());

app.use('/user', UserRouter);
app.use('/family', FamilyRouter);

app.listen(port, () => {
  return console.log('Server up and running');
});
