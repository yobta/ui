import { cloneElement, ReactElement, ReactNode } from 'react'

import { CLICK, FOCUS, ROLLOVER, useToggle } from './useToggle.js'
import { getProducerAriaProps } from './getProducerAriaProps.js'
import { ToggleContext } from './ToggleContext.js'

interface ToogleFC {
  (props: {
    children: [ReactNode, ReactNode]
    activeProducerClassName?: string
    disabled?: boolean
    mode?: typeof CLICK | typeof FOCUS | typeof ROLLOVER
    onToggle?: (isOn: boolean) => void
  }): JSX.Element
}

export type ToggleProps = Parameters<ToogleFC>[0]

export const Toggle: ToogleFC = props => {
  let {
    consumer,
    consumerId,
    consumerRef,
    mode,
    producer,
    producerRef,
    setChildToggleIsVisible,
    visible
  } = useToggle(props)

  return (
    <ToggleContext.Provider value={{ setChildToggleIsVisible }}>
      {cloneElement(producer as ReactElement, {
        ...getProducerAriaProps({ consumerId, mode }),
        ref: producerRef
      })}
      {cloneElement(consumer as ReactElement, {
        ref: consumerRef,
        producerRef,
        visible
      })}
    </ToggleContext.Provider>
  )
}
