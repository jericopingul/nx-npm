import { MyExecutorExecutorSchema } from './schema';
import { myOtherPackage } from '@jericopingul/my-other-package';

export default async function runExecutor(options: MyExecutorExecutorSchema) {
  console.log('Executor ran for MyExecutor 1', myOtherPackage());
  return {
    success: true,
  };
}
