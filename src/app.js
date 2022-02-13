import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import indexRouter from './routes/index';

const app = express();

app.use(cors());

// app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/v1', indexRouter);

// // Add Access Control Allow Origin headers
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept'
//   );
//   next();
// });

// app.listen(80, () => {
//   // eslint-disable-next-line no-console
//   console.log('CORS-enabled web server listening on port 80');
// });

export default app;
