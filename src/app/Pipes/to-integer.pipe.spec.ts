import { ToIntegerPipe } from './to-integer.pipe';

describe('ToIntegerPipe', () => {
  it('create an instance', () => {
    const pipe = new ToIntegerPipe();
    expect(pipe).toBeTruthy();
  });
});
