import { myOtherPackage } from '@jericopingul/my-other-package';
export function helloTsc(): string {
  console.log('helloTsc', myOtherPackage());
  return 'hello-tsc ';
}
