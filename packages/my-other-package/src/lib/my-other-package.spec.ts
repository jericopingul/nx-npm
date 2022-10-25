import { myOtherPackage } from './my-other-package';

describe('myOtherPackage', () => {
  it('should work', () => {
    expect(myOtherPackage()).toEqual('my-other-package update 14');
  });
});
