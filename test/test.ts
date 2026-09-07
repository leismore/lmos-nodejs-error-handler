import assert from 'node:assert/strict';
import test from 'node:test';
import {Request, Response, default as express} from 'express';
import { error_handler } from '../src/index.js';
import request from 'supertest';
import {
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
} from './lib/errors.js';

const app  = express();

app.get('/error-generic', (req:Request, res:Response) => {
    throw ERROR_GENERIC;
});

app.get('/error-cause', (req:Request, res:Response) => {
    throw ERROR_CAUSE;
});

app.get('/lmerror-generic', (req:Request, res:Response) => {
    throw LMERROR_GENERIC;
});

app.get('/lmerror-previous', (req:Request, res:Response) => {
    throw LMERROR_PREVIOUS;
});

app.get('/lmerror-response-full', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_FULL;
});

app.get('/lmerror-response-full-previous', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_FULL_PREVIOUS;
});

app.get('/lmerror-response-status', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_STATUS;
});

app.get('/lmerror-response-status-previous', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_STATUS_PREVIOUS;
});

app.get('/lmerror-response-status-headers', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_STATUS_HEADERS;
});

app.get('/lmerror-response-status-headers-previous', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS;
});

app.get('/lmerror-response-status-body', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_STATUS_BODY;
});

app.get('/lmerror-response-status-body-previous', (req:Request, res:Response) => {
    throw LMERROR_RESPONSE_STATUS_BODY_PREVIOUS;
});

app.use(error_handler);

const server = request(app);


// 1. ERROR_GENERIC
test('1. ERROR_GENERIC', async () => {
    const response = await server.get('/error-generic');
    assert.strictEqual(response.status, 500, 'The status code should be 500');
});

// 2. ERROR_CAUSE
test('2. ERROR_CAUSE', async () => {
    const response = await server.get('/error-cause');
    assert.strictEqual(response.status, 500, 'The status code should be 500');
});

// 3. LMERROR_GENERIC
test('3. LMERROR_GENERIC', async () => {
    const response = await server.get('/lmerror-generic');
    assert.strictEqual(response.status, 500, 'The status code should be 500');
});

// 4. LMERROR_PREVIOUS
test('4. LMERROR_PREVIOUS', async () => {
    const response = await server.get('/lmerror-previous');
    assert.strictEqual(response.status, 500, 'The status code should be 500');
});

// 5. LMERROR_RESPONSE_FULL
test('5. LMERROR_RESPONSE_FULL', async () => {

    const response = await server.get('/lmerror-response-full');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_FULL.response!.statusCode,
        'The status code is incorrect'
    );

    assert.strictEqual(
        response.header['content-type'],
        ( LMERROR_RESPONSE_FULL.getResHeader('content-type') + '; charset=utf-8' ),
        'The Content-Type header is incorrect'
    );

    assert.strictEqual(
        response.header['date'],
        LMERROR_RESPONSE_FULL.getResHeader('date'),
        'The Date header is incorrect'
    );

    assert.deepStrictEqual(
        response.body,
        LMERROR_RESPONSE_FULL.response!.body,
        'The response body is incorrect'
    );
});

// 6. LMERROR_RESPONSE_FULL_PREVIOUS
test('6. LMERROR_RESPONSE_FULL_PREVIOUS', async () => {

    const response = await server.get('/lmerror-response-full-previous');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_FULL_PREVIOUS.response!.statusCode,
        'The status code is incorrect'
    );

    assert.strictEqual(
        response.header['content-type'],
        LMERROR_RESPONSE_FULL_PREVIOUS.getResHeader('content-type'),
        'The Content-Type header is incorrect'
    );

    assert.strictEqual(
        response.header['date'],
        LMERROR_RESPONSE_FULL_PREVIOUS.getResHeader('date'),
        'The Date header is incorrect'
    );

    assert.strictEqual(
        response.text,
        LMERROR_RESPONSE_FULL_PREVIOUS.response!.body,
        'The response body is incorrect'
    );
});

// 7. LMERROR_RESPONSE_STATUS
test('7. LMERROR_RESPONSE_STATUS', async () => {

    const response = await server.get('/lmerror-response-status');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_STATUS.response!.statusCode,
        'The status code is incorrect'
    );
});

// 8. LMERROR_RESPONSE_STATUS_PREVIOUS
test('8. LMERROR_RESPONSE_STATUS_PREVIOUS', async () => {

    const response = await server.get('/lmerror-response-status-previous');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_STATUS_PREVIOUS.response!.statusCode,
        'The status code is incorrect'
    );
});

// 9. LMERROR_RESPONSE_STATUS_HEADERS
test('9. LMERROR_RESPONSE_STATUS_HEADERS', async () => {

    const response = await server.get('/lmerror-response-status-headers');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_STATUS_HEADERS.response!.statusCode,
        'The status code is incorrect'
    );

    assert.strictEqual(
        response.header['server'],
        LMERROR_RESPONSE_STATUS_HEADERS.getResHeader('server'),
        'The Server header is incorrect'
    );

    assert.strictEqual(
        response.header['date'],
        LMERROR_RESPONSE_STATUS_HEADERS.getResHeader('date'),
        'The Date header is incorrect'
    );
});

// 10. LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS
test('10. LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS', async () => {

    const response = await server.get('/lmerror-response-status-headers-previous');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS.response!.statusCode,
        'The status code is incorrect'
    );

    assert.strictEqual(
        response.header['server'],
        LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS.getResHeader('server'),
        'The Server header is incorrect'
    );

    assert.strictEqual(
        response.header['date'],
        LMERROR_RESPONSE_STATUS_HEADERS_PREVIOUS.getResHeader('date'),
        'The Date header is incorrect'
    );
});

// 11. LMERROR_RESPONSE_STATUS_BODY
test('11. LMERROR_RESPONSE_STATUS_BODY', async () => {

    const response = await server.get('/lmerror-response-status-body');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_STATUS_BODY.response!.statusCode,
        'The status code is incorrect'
    );

    assert.strictEqual(
        response.text,
        LMERROR_RESPONSE_STATUS_BODY.response!.body,
        'The response body is incorrect'
    );
});

// 12. LMERROR_RESPONSE_STATUS_BODY_PREVIOUS
test('12. LMERROR_RESPONSE_STATUS_BODY_PREVIOUS', async () => {

    const response = await server.get('/lmerror-response-status-body-previous');

    assert.strictEqual(
        String(response.status),
        LMERROR_RESPONSE_STATUS_BODY_PREVIOUS.response!.statusCode,
        'The status code is incorrect'
    );

    assert.strictEqual(
        response.text,
        LMERROR_RESPONSE_STATUS_BODY_PREVIOUS.response!.body,
        'The response body is incorrect'
    );
});
