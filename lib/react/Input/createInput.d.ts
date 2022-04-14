import { ReactElement, ReactNode, ComponentProps, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
declare type BaseProps = ComponentProps<'input'>;
export declare type InputProps = {
    after?: ReactElement;
    before?: ReactElement;
    caption?: ReactNode;
    children?: ReactNode;
    error?: ReactNode;
    fancy?: boolean;
};
declare type Props = InputProps & BaseProps;
declare type InputFactory = (config: Partial<Props>) => ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>>;
export declare const createInput: InputFactory;
export {};
//# sourceMappingURL=createInput.d.ts.map