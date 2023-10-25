// const { request } = require("./app")
const request = require('supertest');
const app = require('./app');

test('It should respond with Hello World', async () => {
    const response = await request(app).get('/')
    expect(response.text).toBe('Hello World')
});

test('It should respond with Here are the students', async () => {
    const response = await request(app).get('/students')
    expect(response.text).toBe('Here are the students')
});

test('It should show the students name', async () => {
    const name = 'Diandre'
    const response = await request(app).get(`/students/${name}`)
    expect(response.text).toBe(`Profile: ${name}`)
});

test('It should show the admin dashboard', async () => {
    const response = await request(app).get('/dashboard')
    expect(response.text).toBe('Admin Dashboard')
});