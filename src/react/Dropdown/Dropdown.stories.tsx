/* eslint-disable import/extensions */
import { ComponentStory } from '@storybook/react'
import { FC } from 'react'

import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'
import { Toggle } from '../Toggle/Toggle.js'
import { Dropdown } from './Dropdown.js'

export default {
  title: 'React/Dropdown'
}

export type LinearProgressProps = { className?: string }

type TemplateFC = FC<{ placementOptions: PopoverPlacementOptions[] }>
const Template: ComponentStory<TemplateFC> = ({ placementOptions }) => {
  return (
    <div className="grid p-16 gap-16 grid-cols-3">
      {placementOptions.map(option => (
        <Toggle key={option}>
          <button className="yobta-button-primary">{option}</button>
          <Dropdown
            className="w-56"
            placement={option}
            id={`dropdown-menu-${option}`}
            visible
            offset={8}
          >
            <div className="yobta-menu-item  whitespace-nowrap">Option 1</div>
            <div className="yobta-menu-item  whitespace-nowrap">Option 2</div>
            <div className="yobta-menu-item  whitespace-nowrap">Option 3</div>
          </Dropdown>
        </Toggle>
      ))}
    </div>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  placementOptions: [
    'top-left',
    'top',
    'top-right',
    'right-top',
    'right',
    'right-bottom',
    'bottom-left',
    'bottom',
    'bottom-right',
    'left-top',
    'left',
    'left-bottom'
  ]
}
