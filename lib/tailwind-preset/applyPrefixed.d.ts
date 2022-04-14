interface Prefixer {
    (input: string): string;
}
interface ApplyPrefixed {
    (prefix: Prefixer, ...classes: string[]): Record<string, unknown>;
}
export declare const applyPrefixed: ApplyPrefixed;
export {};
//# sourceMappingURL=applyPrefixed.d.ts.map