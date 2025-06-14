import { test, expect } from '@playwright/test';

test.describe('Benutzerverwaltung', () => {
  test('Startseite zeigt Liste der Benutzer', async ({ page }) => {
    await page.goto('/users');
    await expect(page).toHaveTitle("Benutzerliste");
    await expect(page.locator('table')).toContainText('Alice');
  });

  test('Neuen Benutzer anlegen', async ({ page }) => {
    await page.goto('/users');
    await page.click('text=Neuen Benutzer hinzufügen');
    //await expect(page).toHaveURL('/add-user');
    await expect(page).toHaveURL(/\/add-user$/);

    // on "add-user"
    await page.fill('input[name="name"]', 'Testuser');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.getByRole('button', { name: 'Hinzufügen' }).click();

    // Bestätigung
    await expect(page).toHaveURL(/\/users$/);
    await expect(page.locator('table')).toContainText('Testuser');
    await expect(page.locator('table')).toContainText('test@example.com');
  });

  test('Testuser gezielt löschen', async ({ page }) => {
    await page.goto('/users');

    // Bestätigungsdialog vorbereiten
    page.once('dialog', async (dialog) => {
        expect(dialog.type()).toBe('confirm');
        expect(dialog.message()).toContain('Wirklich löschen?');
        await dialog.accept();
    });

    // Zeile finden, die „Testuser“ enthält, und den Löschen-Button darin klicken
    const row = page.locator('tr', { hasText: 'Testuser' }).first();
    const deleteButton = row.locator('button:has-text("Löschen")');
    await deleteButton.click();

    // Überprüfung (Testuser-Zeile existiert nicht mehr – optional)
    await expect(row).not.toBeVisible();
  });

});
