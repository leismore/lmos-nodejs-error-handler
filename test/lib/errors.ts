/**
 * Pre-defined Error & LMError objects for testing purposes.
 */

import { LMError } from '@leismore/lmos-nodejs-lmerror';

// Errors
const ERROR_GENERIC = new Error('Generic error');
const ERROR_CAUSE = new Error('An Error with a cause', { cause: ERROR_GENERIC });

// LMErrors
const LMERROR_GENERIC = new LMError({
    message: 'Generic LMError',
    code: 'GENERIC_01'
});

const LMERROR_PREVIOUS = new LMError({
    message: 'An LMError with a cause',
    code: 'CAUSE_01'
}, undefined, ERROR_GENERIC);

const LMERROR_RESPONSE_FULL = new LMError({
    message: 'An LMError representing an error with a full HTTP response',
    code: 'RESPONSE_02'
}, {
    statusCode: '500',
    headers: [
        { name: 'Content-Type', value: 'application/json' },
        { name: 'Date',         value: 'Tue, 29 Oct 2024 16:56:32 GMT' }
    ],
    body: {
        error: 'Internal Server Error'
    }
});

const LMERROR_RESPONSE_FULL_PREVIOUS = new LMError({
    message: 'An LMError representing an error with a full HTTP response',
    code: 'RESPONSE_03'
}, {
    statusCode: '500',
    headers: [
        { name: 'Content-Type', value: 'text/plain; charset=utf-8' },
        { name: 'Date',         value: 'Tue, 29 Oct 2024 16:56:32 GMT' }
    ],
    body: 'Internal Server Error'
}, LMERROR_RESPONSE_FULL);

const LMERROR_RESPONSE_STATUS = new LMError({
    message: 'Unauthorized',
    code: 'unauthorized_01'
}, {
    statusCode: '401'
});

const LMERROR_RESPONSE_STATUS_PREVIOUS = new LMError({
    message: 'Unauthorized',
    code: 'unauthorized_03'
}, {
    statusCode: '401'
}, LMERROR_RESPONSE_STATUS);

const LMERROR_RESPONSE_STATUS_HEADERS = new LMError({
    message: 'Payment Required',
    code: 'payment_required_01'
}, {
    statusCode: '402',
    headers: [
        { name: 'Server', value: 'Apache/2.4.1 (Unix)' },
        { name: 'Date',   value: 'Tue, 29 Oct 2024 16:56:32 GMT' }
    ]
});

const LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS = new LMError({
    message: 'Payment Required',
    code: 'payment_required_05'
}, {
    statusCode: '402',
    headers: [
        { name: 'Server', value: 'Apache/2.4.1 (Unix)' },
        { name: 'Date',   value: 'Tue, 29 Oct 2024 16:56:32 GMT' }
    ]
}, LMERROR_RESPONSE_STATUS_HEADERS);

const LMERROR_RESPONSE_STATUS_BODY = new LMError({
    message: 'Forbidden message',
    code: 'forbidden_02'
}, {
    statusCode: '403',
    body: 'Forbidden'
});

const LMERROR_RESPONSE_STATUS_BODY_PREVIOUS = new LMError({
    message: 'Another forbidden message',
    code: 'forbidden_03'
}, {
    statusCode: '403',
    body: 'Forbidden'
}, LMERROR_RESPONSE_STATUS_BODY);

export {
    ERROR_GENERIC,
    ERROR_CAUSE,
    LMERROR_GENERIC,
    LMERROR_PREVIOUS,
    LMERROR_RESPONSE_FULL,
    LMERROR_RESPONSE_FULL_PREVIOUS,
    LMERROR_RESPONSE_STATUS,
    LMERROR_RESPONSE_STATUS_PREVIOUS,
    LMERROR_RESPONSE_STATUS_HEADERS,
    LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS,
    LMERROR_RESPONSE_STATUS_BODY,
    LMERROR_RESPONSE_STATUS_BODY_PREVIOUS
};
