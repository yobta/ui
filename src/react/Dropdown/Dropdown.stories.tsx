/* eslint-disable import/extensions */
import { ComponentStory } from '@storybook/react'
import { FC } from 'react'

import { ChevronSmallRight } from '../entypo/index.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'
import { Toggle } from '../Toggle/Toggle.js'
import { Dropdown } from './Dropdown.js'

export default {
  title: 'React/Dropdown'
}

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
            offset={8}
          >
            <button className="yobta-menu-item">Option 1</button>
            <button className="yobta-menu-item">Option 2</button>
            <button className="yobta-menu-item">Option 3</button>
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

const NestedTemplate: ComponentStory<FC> = () => {
  return (
    <Toggle>
      <button className="yobta-button-primary">Toggle 1</button>
      <Dropdown
        className="w-56"
        placement="bottom-left"
        id="nested-toggle-1"
        visible
      >
        <Toggle>
          <button className="yobta-menu-group">
            <span className="yobta-menu-text">Option 1</span>
            <ChevronSmallRight className="yobta-addon" />
          </button>
          <Dropdown className="w-56" id="nested-dropdown" placement="right-top">
            <button className="yobta-menu-item">Option 1.1</button>
            <button className="yobta-menu-item">Option 1.2</button>
          </Dropdown>
        </Toggle>
        <button className="yobta-menu-item">Option 2</button>
        <button className="yobta-menu-item">Option 3</button>
      </Dropdown>
    </Toggle>
  )
}

export const Nested = NestedTemplate.bind({})
Nested.args = {}
