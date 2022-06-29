/* eslint-disable import/extensions */
import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

import { DropdownMenu } from './DropdownMenu.js'

export default {
  title: 'React/DropdownMenu'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<typeof DropdownMenu> = ({
  children,
  className
}) => {
  let ref = useRef<HTMLButtonElement>(null)

  let [, refresh] = useState({})
  useEffect(() => {
    refresh({})
  }, [])
  return (
    <>
      <button className="yobta-button-primary" ref={ref}>
        Button
      </button>
      <DropdownMenu
        // {...props}
        className={clsx('yobta-menu', className)}
        preferredPlacement="bottom-right"
        producerNode={ref.current}
        id="dropdown-menu"
        visible
      >
        {children}
      </DropdownMenu>
    </>
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
