import {
  forwardRef,
  useRef,
  ReactNode,
  ComponentProps,
  useState,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  useEffect
} from 'react'
import clsx from 'clsx'

import { getRefCurrent } from '../helpers/index.js'

type BaseProps = Omit<ComponentProps<'textarea'>, 'children'>

export type TextAreaProps = {
  autoHeight?: boolean
  caption?: ReactNode
  error?: ReactNode
  fancy?: boolean
  captionClassName?: string
  wrapperClassName?: string
}

type Props = TextAreaProps & BaseProps

type TextAreaFactory = (
  config: Partial<Props>
) => ForwardRefExoticComponent<
  PropsWithoutRef<Props> & RefAttributes<HTMLTextAreaElement>
>

export const createTextArea: TextAreaFactory = ({
  className: configClassName,
  captionClassName: configCaptionClassName,
  style: configStyle,
  wrapperClassName: configWrapperClassName,
  ...config
}) =>
  forwardRef((props, externalRef): JSX.Element => {
    let {
      autoHeight,
      caption,
      className,
      defaultValue,
      error = '•',
      fancy,
      captionClassName,
      placeholder,
      style,
      value,
      wrapperClassName,
      ...rest
    } = { ...config, ...props }
    let defaultRef = useRef<HTMLTextAreaElement>(null)
    let ref = externalRef || defaultRef
    let [state, setState] = useState<string>()

    useEffect(() => {
      let node = getRefCurrent(ref)
      let handleBlur = (): void => {
        setState(node?.value)
      }
      let handleInput = (): void => {
        if (autoHeight && node) {
          node.style.height = 'auto'
          node.style.height = `${node.scrollHeight}px`
        }
      }
      if (node) {
        if (state !== node.value) setState(node.value)
        node.addEventListener('blur', handleBlur)
        node.addEventListener('input', handleInput)
      }
      return () => {
        if (node) {
          node.removeEventListener('blur', handleBlur)
          node.removeEventListener('input', handleInput)
        }
      }
    }, [autoHeight, ref, state])

    let isFilled =
      typeof (value || defaultValue || placeholder) !== 'undefined' || !!state

    return (
      <label
        className={clsx(
          'yobta-textarea',
          isFilled && 'yobta-textarea--filled',
          fancy && 'yobta-textarea--fancy',
          configWrapperClassName,
          wrapperClassName
        )}
      >
        <textarea
          {...rest}
          className={clsx('yobta-textarea__input', configClassName, className)}
          defaultValue={defaultValue}
          placeholder={placeholder}
          ref={ref}
          style={{ ...configStyle, ...style }}
          value={value}
        />
        {caption && (
          <span
            className={clsx(
              'yobta-textarea__caption',
              configCaptionClassName,
              captionClassName
            )}
          >
            {caption}
            <span className="yobta-textarea__caption--error-bullet">
              {error}
            </span>
          </span>
        )}
      </label>
    )
  })
