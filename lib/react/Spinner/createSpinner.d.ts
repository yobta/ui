import { ElementType } from 'react';
import { PolymorphicComponent, PolymorphicComponentProps } from '../PolymorphicComponent';
export declare type SpinnerProps = {
    children?: never;
};
export declare type SpinnerConfig<E extends ElementType = typeof defaultElement> = PolymorphicComponentProps<E, Partial<SpinnerProps>>;
declare const defaultElement = "span";
export declare const createSpinner: <C extends ElementType<any> = "span">({ className: configClassName, element: configElement, style: configStyle, ...config }: SpinnerConfig<C>) => PolymorphicComponent<C, SpinnerProps>;
export {};
//# sourceMappingURL=createSpinner.d.ts.map