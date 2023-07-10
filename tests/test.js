const { test } = require('uvu');
const request = require('supertest');
// const assert = require('uvu/assert');

const app = require('../app').callback()

test('get /a/a?$p=["hello",22323]', async () => {
    await request(app)
        .get('/a/a?$p=["hello",22323]')
        .expect('Content-Type', /text\/plain/)
        .expect(200)
        .expect('hello+22323');
});

test('post /a/a', async () => {
    await request(app)
        .post('/a/a')
        .send(["22hello", "001"])
        .expect('Content-Type', /text\/plain/)
        .expect(200)
        .expect('this is a post');
});

test('post /a/b', async () => {
    await request(app)
        .post('/a/b')
        .send(["1", "2"])
        .expect('Content-Type', /json/)
        .expect(200)
        .expect('{"a":"1","b":"2"}');
});

test.run()
