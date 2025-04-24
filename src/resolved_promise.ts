const resolvedPromise = <T>(resolveType: T) => new Promise<T>(r => r(resolveType));

export const resolvedPromises = {
  void: resolvedPromise<void>(void (0)),
  undefined: resolvedPromise<undefined>(undefined),
  true: resolvedPromise(true),
  false: resolvedPromise(false)
};
