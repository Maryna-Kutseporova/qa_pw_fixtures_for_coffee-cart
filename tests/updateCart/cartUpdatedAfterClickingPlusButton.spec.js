import { test } from '../_fixtures/fixtures';
import { priceFormatStr } from '../../src/common/helpers/getPriceForQuantity';
import { COFFEE_PRICES } from '../../src/constants';

test('Assert cart updated correctly after clicking plus for drinks', async ({
  menuPage,
  cartPage,
}) => {
  await menuPage.open();
  await menuPage.clickCappucinoCup();
  await menuPage.clickEspressoCup();

  await menuPage.clickCartLink();
  await cartPage.waitForLoading();

  await cartPage.assertEspressoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.espresso),
  );

  await cartPage.clickAddOneEspressoButton();

  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(20));
  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(COFFEE_PRICES.cappuccino),
  );

  await cartPage.clickAddOneCappuccinoButton();

  await cartPage.assertCappuccinoTotalCostContainsCorrectText(
    priceFormatStr(38),
  );
  await cartPage.assertEspressoTotalCostContainsCorrectText(priceFormatStr(20));

  await cartPage.assertTotalCheckoutContainsValue(priceFormatStr(58));
});
