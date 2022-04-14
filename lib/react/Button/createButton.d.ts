import { ElementType, ReactNode } from 'react';
import { PolymorphicComponent, PolymorphicComponentProps } from '../PolymorphicComponent';
export declare type ButtonProps = {
    busy?: boolean;
    busyIndicator?: ReactNode;
    className?: string;
};
export declare type ButtonConfig<E extends ElementType = typeof defaultElement> = PolymorphicComponentProps<E, Partial<ButtonProps>>;
declare const defaultElement = "button";
export declare const createButton: <C extends ElementType<any> = "button">({ className: configClassName, element: configElement, style: configStyle, ...config }: ButtonConfig<C>) => PolymorphicComponent<C, ButtonProps>;
export {};
//# sourceMappingURL=createButton.d.ts.map