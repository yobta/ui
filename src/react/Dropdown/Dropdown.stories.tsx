/* eslint-disable import/extensions */
import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { Toggle } from '../Toggle/Toggle.js'
import { Dropdown } from './Dropdown.js'

export default {
  title: 'React/Dropdown'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<typeof Dropdown> = ({ children, className }) => {
  let ref = useRef<HTMLButtonElement>(null)

  let [, refresh] = useState({})
  useEffect(() => {
    refresh({})
  }, [])
  return (
    <Toggle>
      <button className="yobta-button-primary" ref={ref}>
        Button
      </button>
      <Dropdown
        // {...props}
        className={clsx('yobta-menu', className)}
        placement="bottom-left"
        producerNode={ref.current}
        id="dropdown-menu"
        visible
      >
        {children}
      </Dropdown>
    </Toggle>
  )
}

export const Simple = Template.bind({})
Simple.args = {
  className: 'w-80 yobta-paper',
  children: (
    <>
      <header className="yobta-menu-header py-2 mb-2">Mail</header>
      <button type="button" className="yobta-menu-item">
        Sent mail
      </button>
      <button type="button" className="yobta-menu-item">
        Drafts
      </button>
      <button type="button" className="yobta-menu-item">
        Starred
      </button>
      <hr className="mx-4 my-2" />
      <button type="button" className="yobta-menu-item">
        Archive
      </button>
    </>
  )
}
