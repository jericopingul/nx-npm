import { myOtherPackage } from './my-other-package';

describe('myOtherPackage', () => {
  it('should work', () => {
    expect(myOtherPackage()).toContain('my-other-package');
  });
});
