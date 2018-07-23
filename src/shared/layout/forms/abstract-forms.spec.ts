import { AbstractForm } from './abstract-forms';
import { FormControl } from '@angular/forms';

// Test all Abstract-Froms functions here..
describe('abstract-froms.ts', function() {
  it('should create an object with firstname and lastname attributes', function() {
    const result = AbstractForm.createFromAttributesObject(['firstname', 'lastname']);

    expect(result).not.toBeNull();
    expect(result['firstname']).not.toBeNull();
    expect(result['firstname'] instanceof FormControl).toBeTruthy();

    console.log('Test completed');
    expect(result['lastname']).not.toBeNull();
    expect(result['lastname'] instanceof FormControl).toBeTruthy();
  });
});
