import { ElementType } from 'react';
import { PolymorphicComponent, PolymorphicComponentProps } from '../PolymorphicComponent';
export declare type LinearProgressProps = {
    children?: never;
};
export declare type LinearProgressConfig<E extends ElementType = typeof defaultElement> = PolymorphicComponentProps<E, Partial<LinearProgressProps>>;
declare const defaultElement = "div";
export declare const createLinearProgress: <C extends ElementType<any> = "div">({ className: configClassName, element: configElement, style: configStyle, ...config }: LinearProgressConfig<C>) => PolymorphicComponent<C, LinearProgressProps>;
export {};
//# sourceMappingURL=createLinearProgress.d.ts.map