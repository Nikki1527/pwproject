import { Page } from '@playwright/test';

/**
 * General-purpose helper utilities for tests.
 */

/** Wait for a number of milliseconds (use sparingly). */
export async function sleep(ms: number): Promise<void> {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

/** Retry an async action up to `maxAttempts` times. */
export async function retry<T>(
  action: () => Promise<T>,
  maxAttempts = 3,
  delayMs = 500,
): Promise<T> {
  let lastError: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await action();
    } catch (err) {
      lastError = err;
      if (attempt < maxAttempts) await sleep(delayMs);
    }
  }
  throw lastError;
}

/** Read a cookie value by name from the current page context. */
export async function getCookieValue(page: Page, name: string): Promise<string | undefined> {
  const cookies = await page.context().cookies();
  return cookies.find((c) => c.name === name)?.value;
}

/** Clear all cookies and local/session storage. */
export async function clearBrowserState(page: Page): Promise<void> {
  await page.context().clearCookies();
  await page.evaluate(() => {
    localStorage.clear();
    sessionStorage.clear();
  });
}

/** Generate a random string of given length. */
export function randomString(length = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

/** Generate a unique email address. */
export function uniqueEmail(prefix = 'user'): string {
  return `${prefix}+${randomString(6)}@test.com`;
}

/** Format a date as YYYY-MM-DD. */
export function formatDate(date: Date = new Date()): string {
  return date.toISOString().split('T')[0];
}
