import { ElementType, ComponentProps } from 'react';
declare type PolymorphicProps<E extends ElementType = ElementType> = {
    element?: E;
};
export declare type PolymorphicComponentProps<E extends ElementType, P> = P & PolymorphicProps<E> & Omit<ComponentProps<E>, keyof PolymorphicProps>;
export declare type PolymorphicComponent<D extends ElementType, P> = <E extends ElementType = D>(props: PolymorphicComponentProps<E, P>) => JSX.Element;
export {};
//# sourceMappingURL=PolymorphicComponent.d.ts.map