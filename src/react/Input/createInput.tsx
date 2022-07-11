import {
  forwardRef,
  ReactElement,
  ReactNode,
  ComponentProps,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefRenderFunction
} from 'react'
import clsx from 'clsx'

import { useInput } from './useInput.js'

type InputNodeProps = Omit<ComponentProps<'input'>, 'children'>

type YobtaProps = {
  after?: ReactElement
  before?: ReactElement
  caption?: ReactNode
  error?: ReactNode
  fancy?: boolean
}

export type YobtaInputProps = YobtaProps & InputNodeProps

type InputFactory = (
  config: Partial<YobtaInputProps>
) => ForwardRefExoticComponent<
  PropsWithoutRef<YobtaInputProps> & RefAttributes<YobtaProps>
>

export const createInput: InputFactory = ({
  className: configClassName,
  style: configStyle,
  ...config
}) => {
  let Input: ForwardRefRenderFunction<YobtaInputProps, InputNodeProps> = (
    props,
    forwardedRef
  ) => {
    let {
      after,
      before,
      caption,
      className,
      defaultValue,
      disabled,
      error,
      fancy,
      placeholder,
      style,
      type = 'text',
      value,
      ...rest
    } = { ...config, ...props }

    let { combinedRef, isFilled } = useInput({
      forwardedRef,
      value,
      defaultValue,
      placeholder
    })

    return (
      <label
        className={clsx(
          'yobta-input',
          after && 'yobta-input--after',
          before && 'yobta-input--before',
          disabled && 'yobta-input--disabled',
          error && 'yobta-input--error',
          fancy && 'yobta-input--fancy',
          isFilled && 'yobta-input--filled',
          configClassName,
          className
        )}
        style={{ ...configStyle, ...style }}
      >
        {before}
        <span className="yobta-input__wrapper">
          <input
            {...rest}
            defaultValue={defaultValue}
            disabled={disabled}
            placeholder={placeholder}
            ref={combinedRef}
            type={type}
            value={value}
          />
          {(caption || error) && (
            <span className="yobta-input__caption">
              {caption}
              <span className="yobta-input__bullet">{error || '•'}</span>
            </span>
          )}
        </span>
        {after}
      </label>
    )
  }

  let YobtaInput = forwardRef(Input)

  YobtaInput.displayName = 'YobtaInput'

  return YobtaInput
}
