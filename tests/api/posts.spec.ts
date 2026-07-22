import { test, expect } from '@playwright/test';
 import { z } from 'zod';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const PostSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  userId: z.number(),
});

test('GET returns a valid post', { tag: ['@smoke', '@regression'] }, async ({ request }) => {
  const res = await request.get(`${BASE_URL}/posts/1`);
  expect(res.status()).toBe(200);
  const body = await res.json();
  expect(body).toHaveProperty('id', 1);
  expect(body).toHaveProperty('title');
  expect(typeof body.title).toBe('string');
});

test('POST creates a new post', { tag: ['@smoke', '@regression'] }, async ({ request }) => {
  const res = await request.post(`${BASE_URL}/posts`, {
    data: { title: 'foo', body: 'bar', userId: 1 },
  });
  expect(res.status()).toBe(201);
  const body = await res.json();
  expect(body).toHaveProperty('id');
});

test('GET non-existent post returns 404', { tag: ['@smoke', '@regression'] }, async ({ request }) => {
  const res = await request.get(`${BASE_URL}/posts/99999`);
  expect(res.status()).toBe(404);


test('post response matches schema', { tag: ['@smoke', '@regression'] }, async ({ request }) => {
  const res = await request.get(`${BASE_URL}/posts/1`);
  const body = await res.json();
  expect(() => PostSchema.parse(body)).not.toThrow();
});

});