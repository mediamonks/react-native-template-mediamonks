import { testComponent } from '../enum/TestIDs';

describe('Test Component detox', () => {
  /**
   * Before each test reload app.
   */
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  /**
   * Test component rendered.
   */
  it('Test Component should be visible', async () => {
    await expect(element(by.id(testComponent.container))).toBeVisible();
  });
  /**
   * Test button taps and for correct response.
   */
  it('Counter value should increment after button tap', async () => {
    await element(by.id(testComponent.incrementButton)).tap();
    await expect(element(by.text('Counter value: 1'))).toBeVisible();
  });

  it('Counter value should decrement after button tap', async () => {
    await element(by.id(testComponent.decrementButton)).tap();
    await expect(element(by.text('Counter value: -1'))).toBeVisible();
  });
});
