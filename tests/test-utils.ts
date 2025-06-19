import { Page } from '@playwright/test';

import knex from 'knex';
import knexConfig from '../knexfile';

export const db = knex(knexConfig.development);

export async function resetTestDatabase() {
  await db.migrate.latest();
  await db.seed.run();
}

export async function createTestUser(page: Page, name = 'Testuser', email = 'test@example.com') {
  await page.goto('/users');
  await page.click('text=Neuen Benutzer hinzufügen');
  await page.fill('input[name="name"]', name);
  await page.fill('input[name="email"]', email);
  await page.locator('form').locator('button[type="submit"]').click();
  await page.waitForURL(/\/users$/);
}

export async function deleteTestUser(page: Page, name = 'Testuser') {
  await page.goto('/users');

  const row = page.locator('tr', { hasText: name }).first();
  const deleteButton = row.locator('button:has-text("Löschen")');

  if (await deleteButton.count()) {
    page.once('dialog', async (dialog) => await dialog.accept());
    await deleteButton.click();
    await page.waitForLoadState('networkidle');
  }
}
