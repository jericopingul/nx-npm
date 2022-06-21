import { MyExecutorExecutorSchema } from './schema';
import executor from './executor';

const options: MyExecutorExecutorSchema = {};

describe('MyExecutor Executor', () => {
  it('can run', async () => {
    const output = await executor(options);
    expect(output.success).toBe(true);
  });
});