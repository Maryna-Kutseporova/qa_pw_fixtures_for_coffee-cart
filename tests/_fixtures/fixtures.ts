import { test as base } from '@playwright/test';
import { MenuPage } from '../../src/pages/MenuPage';
import { CartPage } from '../../src/pages/CartPage';

export const test = base.extend<{
  menuPage: any;
  cartPage: any;
}>({
  menuPage: async ({ page }, use) => {
    const menuPage = new MenuPage(page);
    await use(menuPage);
  },

  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await use(cartPage);
  },
});
