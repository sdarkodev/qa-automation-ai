import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('valid login redirects to inventory', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);
});

test('invalid password shows error', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'wrong_password');
  await expect(login.errorMessage).toBeVisible();
});

test('locked out user is blocked', { tag: ['@smoke', '@regression'] }, async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('locked_out_user', 'secret_sauce');
  await expect(login.errorMessage).toContainText('locked out');
});