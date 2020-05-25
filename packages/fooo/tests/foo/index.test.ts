import { foo } from 'src/foo';

describe('foo', () => {
  it('tells a message', () => {
    const message = 'whatever';
    const result = foo(message);

    expect(result).toContain('foo');
    expect(result).toContain(message);
  });
});
