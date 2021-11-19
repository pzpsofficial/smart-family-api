import { Application, Request, Response } from 'express';
import express from 'express';

const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('elo');
});

app.listen(port, () => {
  return console.log('siema');
});
