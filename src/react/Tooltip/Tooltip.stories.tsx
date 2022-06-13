/* eslint-disable import/extensions */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useEffect, useRef, useState } from 'react'

import { Tooltip } from './Tooltip'
import { ShoppingBag } from '../entypo'

export default {
  title: 'React/Tooltip',
  component: Tooltip,
  argTypes: {}
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => {
  let ref = useRef(null)
  let [, refresh] = useState({})
  useEffect(() => {
    refresh({})
  }, [])
  return (
    <>
      <button
        className="ui-button ui-border-ink-border backdrop-blur-md"
        ref={ref}
      >
        <ShoppingBag />
        Add to cart
      </button>
      <Tooltip {...args} producerNode={ref.current} visible />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: 'My tooltip',
  id: 'tooltip-bottom',
  // align: 'top',
  // align: 'top-left',
  // align: 'top-right',
  // align: 'bottom'
  // align: 'bottom-left',
  placement: 'bottom-right'
  // align: 'right',
  // align: 'right-top',
  // align: 'right-bottom',
  // align: 'left',
  // align: 'left-top',
  // align: 'left-bottom',
  // className: 'ui-bg-secondary p-6'
}
