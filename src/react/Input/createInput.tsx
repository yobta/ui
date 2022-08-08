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
  PropsWithoutRef<YobtaInputProps> & RefAttributes<HTMLInputElement>
>

export const createInput: InputFactory = ({
  className: configClassName,
  style: configStyle,
  ...config
}) => {
  let Input: ForwardRefRenderFunction<HTMLInputElement, YobtaInputProps> = (
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

    let { inputRef, isFilled, labelRef } = useInput({
      defaultValue,
      forwardedRef,
      placeholder,
      value
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
        ref={labelRef}
        style={{ ...configStyle, ...style }}
      >
        {before}
        <span className="yobta-input__wrapper">
          <input
            {...rest}
            defaultValue={defaultValue}
            disabled={disabled}
            placeholder={placeholder}
            ref={inputRef}
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

  return YobtaInput
}
