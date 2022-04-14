declare type Patch<S> = Partial<S> | ((prev: S) => S);
declare type UsePatchState<S> = [S, (patch: Patch<S>) => void];
export declare function usePatchState<S>(initialState: S): UsePatchState<S>;
export {};
//# sourceMappingURL=usePatchState.d.ts.map