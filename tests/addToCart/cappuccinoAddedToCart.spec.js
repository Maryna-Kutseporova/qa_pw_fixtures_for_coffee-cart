import { test } from '../_fixtures/fixtures';
import {
  unitPriceFormatStr,
  priceFormatStr,
} from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Check Cappuccino correctly added to the Cart', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertCappuccinoNameIsContainsCorrectText();
  await cartPage.assertCappuccinoUnitContainsCorrectText(
    unitPriceFormatStr(COFFEE_PRICES.cappuccino, 1),
  );
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.cappuccino),
  );
});
