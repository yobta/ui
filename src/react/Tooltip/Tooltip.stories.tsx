/* eslint-disable import/extensions */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { useRef } from 'react'

import { Tooltip } from './Tooltip'
import { ShoppingBag } from '../entypo'

export default {
  title: 'React/Tooltip',
  component: Tooltip,
  argTypes: {}
} as ComponentMeta<typeof Tooltip>

const Template: ComponentStory<typeof Tooltip> = args => {
  let ref = useRef(null)
  return (
    <>
      <button
        className="yobta-button yobta-border-ink-border backdrop-blur-md"
        ref={ref}
      >
        <ShoppingBag />
        Add to cart
      </button>
      <Tooltip {...args} producerRef={ref} visible />
    </>
  )
}

// export const Default = Template.bind({})
// Default.args = {
//   children: 'My tooltip',
//   id: 'tooltip-bottom',
//   // align: 'top',
//   // align: 'top-left',
//   // align: 'top-right',
//   // align: 'bottom'
//   // align: 'bottom-left',
//   placement: 'bottom-right'
//   // align: 'right',
//   // align: 'right-top',
//   // align: 'right-bottom',
//   // align: 'left',
//   // align: 'left-top',
//   // align: 'left-bottom',
//   // className: 'yobta-bg-secondary p-6'
// }

export const withoutPlacement = Template.bind({})
withoutPlacement.args = {
  children: 'My tooltip',
  id: 'withoutPlacement'
}

export const preferredPlacement = Template.bind({})
preferredPlacement.args = {
  children: 'My tooltip',
  id: 'preferredPlacement',
  preferredPlacement: 'right-bottom'
}

export const PlacementTop = Template.bind({})
PlacementTop.args = {
  children: 'My tooltip',
  id: 'placement top',
  placement: 'top'
}

export const PlacementTopLeft = Template.bind({})
PlacementTopLeft.args = {
  children: 'My tooltip',
  id: 'placement top-left',
  placement: 'top-left'
}

export const PlacementTopRight = Template.bind({})
PlacementTopRight.args = {
  children: 'My tooltip',
  id: 'placement top-right',
  placement: 'top-right'
}

export const PlacementBottom = Template.bind({})
PlacementBottom.args = {
  children: 'My tooltip',
  id: 'placement bottom',
  placement: 'bottom'
}

export const PlacementBottomLeft = Template.bind({})
PlacementBottomLeft.args = {
  children: 'My tooltip',
  id: 'placement bottom-left',
  placement: 'bottom-left'
}

export const PlacementBottomRight = Template.bind({})
PlacementBottomRight.args = {
  children: 'My tooltip',
  id: 'placement bottom-right',
  placement: 'bottom-right'
}

export const PlacementRight = Template.bind({})
PlacementRight.args = {
  children: 'My tooltip',
  id: 'placement right',
  placement: 'right'
}

export const PlacementRightTop = Template.bind({})
PlacementRightTop.args = {
  children: 'My tooltip',
  id: 'placement right-top',
  placement: 'right-top'
}

export const PlacementRightBottom = Template.bind({})
PlacementRightBottom.args = {
  children: 'My tooltip',
  id: 'placement right-bottom',
  placement: 'right-bottom'
}

export const PlacementLeft = Template.bind({})
PlacementLeft.args = {
  children: 'My tooltip',
  id: 'placement left',
  placement: 'left'
}

export const PlacementLeftTop = Template.bind({})
PlacementLeftTop.args = {
  children: 'My tooltip',
  id: 'placement left-top',
  placement: 'left-top'
}

export const PlacementLeftBottom = Template.bind({})
PlacementLeftBottom.args = {
  children: 'My tooltip',
  id: 'placement left-bottom',
  placement: 'left-bottom'
}
