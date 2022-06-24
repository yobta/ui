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
  RefAttributes
} from 'react'
import clsx from 'clsx'

import { getRefCurrent } from '../helpers/index.js'

type BaseProps = ComponentProps<'input'>

export type InputProps = {
  after?: ReactElement
  before?: ReactElement
  caption?: ReactNode
  children?: ReactNode
  error?: ReactNode
  fancy?: boolean
}

type Props = InputProps & BaseProps

type InputFactory = (
  config: Partial<Props>
) => ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLInputElement>
>

export const createInput: InputFactory = ({
  className: configClassName,
  style: configStyle,
  ...config
}) =>
  forwardRef((props, externalRef): JSX.Element => {
    let {
      after,
      before,
      children,
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
    let defaultRef = useRef<HTMLInputElement>(null)
    let ref = externalRef || defaultRef
    let [state, setState] = useState<string>()

    let node = getRefCurrent<HTMLInputElement>(ref)

    useEffect(() => {
      let currentNode = getRefCurrent<HTMLInputElement>(ref)
      let handleBlur = (): void => {
        setState(currentNode?.value)
      }
      let handleKeydown = (event: KeyboardEvent): void => {
        if (children && currentNode && event.code === 'Escape') {
          currentNode.blur()
        }
      }
      if (currentNode) {
        if (state !== currentNode.value) setState(currentNode.value)
        currentNode.addEventListener('blur', handleBlur)
        currentNode.addEventListener('keydown', handleKeydown)
      }
      return () => {
        if (currentNode) {
          currentNode.removeEventListener('blur', handleBlur)
          currentNode.removeEventListener('keydown', handleKeydown)
        }
      }
    }, [children, ref, state])

    let isFilled =
      typeof (value || defaultValue || placeholder) !== 'undefined' ||
      !!node?.value

    return (
      <label
        className={clsx(
          'yobta-input',
          after && 'yobta-input--after',
          before && 'yobta-input--before',
          children && 'yobta-input--menu',
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
            ref={ref}
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
        {children && <nav className="yobta-input__menu">{children}</nav>}
      </label>
    )
  })
