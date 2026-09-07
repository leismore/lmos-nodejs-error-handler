/**
 * lmerror_handler function: Handles LMError objects.
 */

import { env } from 'node:process';
import { Response, NextFunction } from 'express';
import { LMError } from '@leismore/lmos-nodejs-lmerror';
import { lmerror_res } from './lmerror_res.js';

const IS_PRODUCTION: boolean = ( env.NODE_ENV === 'production' );

function lmerror_handler(
    error : LMError,
    res   : Response,
    next  : NextFunction,
): void
{

    console.error(String(error));
    if (!IS_PRODUCTION) {
        console.error(error.stack);
    }

    lmerror_res(error, res);
    
    next('route');
    return;
}

export { lmerror_handler };
