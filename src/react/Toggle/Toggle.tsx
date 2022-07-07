import { cloneElement, ReactElement } from 'react'

import { ToggleProps, useToggle } from './useToggle.js'
import { getProducerAriaProps } from './getProducerAriaProps.js'
import { ToggleContext } from './ToggleContext.js'

interface ToogleFC {
  (props: ToggleProps): JSX.Element
  displayName: string
}

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

Toggle.displayName = 'YobtaToggle'
