import '@testing-library/jest-dom';
import { fetch, Headers, Request, Response } from 'cross-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { dummyCityWeather } from '@/tests/mocks/dummyCityWeather';
import { WEATHER_BASE_URL } from '@/configs/APIUrls';

global.fetch = fetch;
global.Headers = Headers;
global.Request = Request;
global.Response = Response;

export const handlers = [
  rest.get(`${WEATHER_BASE_URL}/weather`, (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dummyCityWeather));
  }),
];

export const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());
