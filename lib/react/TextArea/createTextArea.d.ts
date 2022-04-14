import { ReactNode, ComponentProps, ForwardRefExoticComponent, PropsWithoutRef, RefAttributes } from 'react';
declare type BaseProps = Omit<ComponentProps<'textarea'>, 'children'>;
export declare type TextAreaProps = {
    autoHeight?: boolean;
    caption?: ReactNode;
    error?: ReactNode;
    fancy?: boolean;
    captionClassName?: string;
    wrapperClassName?: string;
};
declare type Props = TextAreaProps & BaseProps;
declare type TextAreaFactory = (config: Partial<Props>) => ForwardRefExoticComponent<PropsWithoutRef<Props> & RefAttributes<HTMLTextAreaElement>>;
export declare const createTextArea: TextAreaFactory;
export {};
//# sourceMappingURL=createTextArea.d.ts.map