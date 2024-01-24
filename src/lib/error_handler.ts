/**
 * error_handler function - A general error handler for LMOS for Node.js project
 */

import {Request, Response, NextFunction} from 'express';
import {LMResponse as Resp} from '@leismore/lmos-nodejs-lmresponse';

function error_handler(error:Error, req:Request, res:Response, next:NextFunction): void
{
  const resp = new Resp(res);

  if (res.headersSent) {
    next(error);
    return;
  }

  resp.sendERROR(error);
}

export {error_handler};
