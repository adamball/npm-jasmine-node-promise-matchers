declare module jasmine {
  interface Matchers {
    toResolve(done?: () => void): boolean;
    toResolveWith(expected: any, done?: () => void): boolean;
    toReject(done?: () => void): boolean;
    toRejectWith(expected: any, done?: () => void): boolean;
  }
}

declare var jasmineNodePromiseMatchers: jasmine.Matchers;

export = jasmineNodePromiseMatchers;