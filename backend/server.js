import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import { PORT } from './config/config.js'
import { InitDB } from './database/db.js';
import productRouter from './routes/product.routes.js';
import { ajm } from './middlewares/arcjet.middleware.js';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// middleware
app.use(ajm);

app.use('/api/v1/products/', productRouter);

InitDB().then( () => {
  app.listen(PORT, ()=>{
    console.log(`\x1b[33mListening on port http://localhost:${PORT}\x1b[0m`);
  });
});



export default app;