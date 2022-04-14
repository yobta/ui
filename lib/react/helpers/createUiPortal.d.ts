import { ReactNode, ReactPortal } from 'react';
declare type Context = {
    addToPortal(children: ReactNode): void;
};
export declare const context: import("react").Context<Context>;
export declare const createUiPortal: (children: ReactNode, nodeId?: string | undefined) => ReactPortal | ReactNode;
export {};
//# sourceMappingURL=createUiPortal.d.ts.map