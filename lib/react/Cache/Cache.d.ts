import { Component, ReactNode } from 'react';
declare type Props = {
    children: ReactNode;
    disabled?: boolean;
};
export declare class Cache extends Component<Props> {
    shouldComponentUpdate({ disabled }: Props): boolean;
    render(): ReactNode;
}
export {};
//# sourceMappingURL=Cache.d.ts.map