/**
 * error_handler function - A general error handler for LMOS for Node.js project.
 */

import { Request, Response, NextFunction } from 'express';
import { LMError } from '@leismore/lmos-nodejs-lmerror';
import { lmerror_handler } from './lmerror_handler.js';

function error_handler(error:Error, req:Request, res:Response, next:NextFunction): void
{
    
    if (res.headersSent) {
        next(error);
        return;
    }

    if (error instanceof LMError) {
        lmerror_handler(error, res, next);
        return;
    } else {
        next(error);
        return;
    }
  
}

export {error_handler};
