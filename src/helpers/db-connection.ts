import { connect, connection } from 'mongoose';

const connectToDb = async (): Promise<void> => {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };

  connect(process.env.DB_ADDRESS as string, options as any);
  const db = connection;

  db.on('error', () => {
    console.log('DB error');
  });
  db.once('open', () => {
    console.log('Connected to database');
  });
};

export default connectToDb;
