import express from 'express';
import { LMResponse as Resp, LMResponseData as RespData } from '@leismore/lmos-nodejs-lmresponse';
import { error_handler } from '../src/index.js';

const app  = express();
const port = 8080;

app.get('/', (req:express.Request, res:express.Response, next:express.NextFunction) => {
  const resp = new Resp(res);
  let data:RespData = {statusCode: '200', headers: {'Content-Type': 'application/json'}, body: {'result': 'OK'}};
  resp.send(data);
});

app.use(error_handler);

app.listen(port, () => {
  console.log(`@leismore/lmos-nodejs-error-handler testing server, listening at http://localhost:${port}`);
});
