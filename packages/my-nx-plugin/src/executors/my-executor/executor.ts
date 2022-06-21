import { MyExecutorExecutorSchema } from './schema';
import { myOtherPackage } from '@my-nx-npm/my-other-package';

export default async function runExecutor(options: MyExecutorExecutorSchema) {
  console.log('Executor ran for MyExecutor', myOtherPackage());
  return {
    success: true,
  };
}
