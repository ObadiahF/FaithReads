import express, { Request, Response } from 'express';
import albumsRouter from './books/books.routes';
import helmet from 'helmet';
import cors from 'cors';
import logger from './middleware/logger.middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;

// enable all CORS request
app.use(cors());

// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// adding set of security middleware
app.use(helmet());

if (process.env.NODE_ENV == 'development') {
  // add logger middleware
  app.use(logger);
  console.log(process.env.GREETING + ' in dev mode');
}

// Application routes
// root route
app.get('/', (req: Request, res: Response) => {
  res.send("<h1>Welcome to Obadiah's Milestone!<h1/>");
});

// adding router middleware
app.use('/', [albumsRouter]);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
