import { NotFoundExceptionFilter } from './notFound.filter';

describe('AllFilter', () => {
  it('should be defined', () => {
    expect(new NotFoundExceptionFilter()).toBeDefined();
  });
});
