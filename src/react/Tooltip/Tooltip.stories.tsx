/* eslint-disable import/extensions */
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FC, Fragment, useRef } from 'react'

import { Tooltip } from './Tooltip'
import { ShoppingBag } from '../entypo'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement'

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

type Template2Props = FC<{ options: PopoverPlacementOptions[] }>
const Template2: ComponentStory<Template2Props> = ({ options }) => {
  return (
    <div className="p-16 grid grid-cols-3 gap-16">
      {options.map(option => {
        let ref = useRef(null)

        return (
          <Fragment key={option}>
            <button
              className="yobta-button yobta-border-ink-border backdrop-blur-md"
              ref={ref}
            >
              <ShoppingBag />
              Add to cart
            </button>
            <Tooltip
              placement={option}
              producerRef={ref}
              visible
              id={`tooltip-${option}`}
            >
              {option}
            </Tooltip>
          </Fragment>
        )
      })}
    </div>
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

export const AllPlacementOptions = Template2.bind({})
AllPlacementOptions.args = {
  options: ['top', 'top-left', 'top-right', 'bottom', 'left', 'right']
}
