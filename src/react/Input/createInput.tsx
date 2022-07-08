import {
  forwardRef,
  useEffect,
  useRef,
  ReactElement,
  ReactNode,
  ComponentProps,
  useState,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  ForwardRefRenderFunction
} from 'react'
import clsx from 'clsx'

import { useCombineRefs } from '../hooks/index.js'
import { useTimeout } from '../hooks/useTimeout/useTimeout.js'
import { subscribe } from '../helpers/subscribe/index.js'

type BaseProps = Omit<ComponentProps<'input'>, 'children'>

export type InputProps = {
  after?: ReactElement
  before?: ReactElement
  caption?: ReactNode
  error?: ReactNode
  fancy?: boolean
}

type Props = InputProps & BaseProps

type InputFactory = (
  config: Partial<Props>
) => ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<InputProps>
>

export const createInput: InputFactory = ({
  className: configClassName,
  style: configStyle,
  ...config
}) => {
  let Input: ForwardRefRenderFunction<InputProps, BaseProps> = (
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
      error = '•',
      fancy,
      placeholder,
      style,
      type = 'text',
      value,
      ...rest
    } = { ...config, ...props }
    let inputRef = useRef<HTMLInputElement>(null)
    let combinedRef = useCombineRefs<HTMLInputElement>(forwardedRef, inputRef)
    let [state, setState] = useState<string>(
      String(typeof value === 'undefined' ? defaultValue : value)
    )

    let inputNode = inputRef.current

    useTimeout(
      64,
      () => {
        setState(inputRef.current?.value)
      },
      []
    )

    useEffect(() => {
      if (inputNode && state !== inputNode.value) {
        setState(inputNode.value)
      }
    })

    useEffect(() => {
      let handleBlur = (): void => {
        setState(inputNode?.value)
      }

      return subscribe(inputNode, 'blur', handleBlur)
    }, [inputNode])

    let isFilled =
      typeof (state || placeholder) !== 'undefined' || !!inputNode?.value

    return (
      <label
        className={clsx(
          'yobta-input',
          after && 'yobta-input--after',
          before && 'yobta-input--before',
          disabled && 'yobta-input--disabled',
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
          {caption && (
            <span className="yobta-input__label">
              {caption}
              <span className="yobta-input__label--error-bullet">{error}</span>
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
