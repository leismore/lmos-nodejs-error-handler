/**
 * Because `start-server-and-test` DOES NOT support testing non-success HTTP responses,
 * this unit test DOES NOT actually test error-handling!!!
 * For now, the unit test ONLY validates that if the server is working properly.
 */

import { assert } from 'chai';
import axios from 'axios';

describe('error_handler function', function(){
    it('The server should return {result: OK} (application/json)', function(){
        return axios.get('http://localhost:8080').then(res=>{
            assert( (String(res.headers['content-type']).includes('application/json') &&
              res.data.result === 'OK') );
        }).catch(e=>{
            assert(false);
        });
    });
});
