/* eslint-disable import/prefer-default-export */
/**
 *  Test IDs
 *
 *  When writing e2e tests we need to set an id to a specific component,
 *  this enum contains all of the id's.
 *
 *  naming convention: {className}-{component}-{*unique identifier}
 *  * optional depending on duplicate components
 */

// Test id's for Test Component
export const testComponent = {
  container: 'test-component-container',
  counterValue: 'test-component-counter-value',
  incrementButton: 'test-component-button-increment',
  decrementButton: 'test-component-button-decrement',
};
