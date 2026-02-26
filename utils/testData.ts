/**
 * Centralised test data used across all specs.
 * Keep credentials here — never hard-code them in test files.
 */

export const USERS = {
  validUser: {
    username: 'standard_user',
    password: 'secret_sauce',
    displayName: 'Standard User',
  },
  adminUser: {
    username: 'admin_user',
    password: 'admin_pass',
    displayName: 'Admin User',
  },
  lockedUser: {
    username: 'locked_out_user',
    password: 'secret_sauce',
    displayName: 'Locked User',
  },
} as const;

export const MESSAGES = {
  login: {
    lockedOut: 'Sorry, this user has been locked out.',
    invalidCredentials: 'Username and password do not match any user in this service.',
    emptyUsername: 'Username is required.',
    emptyPassword: 'Password is required.',
  },
} as const;

export const URLS = {
  login: '/login',
  home: '/home',
  profile: '/profile',
  settings: '/settings',
} as const;

export const TIMEOUTS = {
  short: 5_000,
  medium: 15_000,
  long: 30_000,
} as const;
