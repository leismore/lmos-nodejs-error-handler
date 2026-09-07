/**
 * lmerror_res function: Sends a HTTP response based on the LMError object.
 */

import { Response } from 'express';
import { LMError } from '@leismore/lmos-nodejs-lmerror';

function lmerror_res(error: LMError, res: Response): void {

    if (error.response === undefined) {
        res.sendStatus(500);
        return;
    }

    if ( error.response.headers !== undefined &&
         error.response.headers.length > 0 )
    {
        for (const header of error.response.headers) {
            res.set(header.name, header.value);
        }
    }

    if (error.response.body === undefined) {
        res.sendStatus(Number(error.response.statusCode));
        return;
    } else {
        res.status(Number(error.response.statusCode)).send(error.response.body);
        return;
    }

}

export { lmerror_res };
