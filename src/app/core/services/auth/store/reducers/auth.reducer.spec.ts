import { reducer, initialUserState } from './auth.reducer';

describe('Auth Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialUserState, action);

      expect(result).toBe(initialUserState);
    });
  });
});
