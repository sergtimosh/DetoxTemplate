describe('Example Screen Tests', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should type into the text field', async () => {
    const timeout = async (t) => await new Promise(resolve => setTimeout(resolve, t))
    await timeout(2000)
    await element(by.text('Example screen')).tap();
    await timeout(2000)

    const someText = 'This is just a test (:';
    await element(by.id('ExampleTextInputId')).typeText(someText);
    await expect(element(by.id('ExampleTextInputId'))).toHaveText(someText);
  });
});
