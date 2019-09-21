import express from 'express';
import { createConnection } from 'typeorm';
import bodyParser from 'body-parser';
import httpLogger from './middleware/httpLogger';
import { Routes } from './routes';

const app = express();
app.use(bodyParser.json());
app.use(httpLogger);

app.get('/', async (req, res, next) => {
  res.json('Alive!')
})

Routes.forEach(route => {
  app[route.method](route.route, (req, res, next) => {
    const result = (new route.controller)[route.action](req, res, next);
    if (result instanceof Promise) {
      result
        .then(result => res.send(result))
        .catch(err => res.send({error: err.message}))
    } else {
      res.json(result);
    }
  })
})


const PORT = process.env.PORT || 3000

createConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
  })
}).catch(error => console.log(error))
