const resolvedPromiseFactory = <T>(resolveType: T) => new Promise<T>(r => r(resolveType));

export const resolvedPromise = {
  void: resolvedPromiseFactory<void>(void (0)),
  undefined: resolvedPromiseFactory<undefined>(undefined),
  true: resolvedPromiseFactory(true),
  false: resolvedPromiseFactory(false)
};
