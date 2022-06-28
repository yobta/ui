/* eslint-disable import/extensions */
import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'

// import { Archive, ChevronSmallRight, Mail, PaperPlane, Star } from '../entypo'
import { Menu } from './Menu'

export default {
  title: 'CSS/Menu'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<typeof Menu> = ({ children, className }) => {
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
      <Menu
        // {...props}
        className={clsx('yobta-menu', className)}
        preferredPlacement="bottom-right"
        producerNode={ref.current}
        id="menu"
        visible
      >
        {children}
      </Menu>
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

// export const Advanced = Template.bind({})
// Advanced.args = {
//   className: 'w-80 yobta-paper shadow',
//   children: (
//     <>
//       <header className="yobta-menu-header py-2 mb-2">Mail</header>
//       <button type="button" className="yobta-menu-group yobta-ink">
//         <PaperPlane className="yobta-menu-icon" />
//         <span className="yobta-menu-text">Sent mail</span>
//         <ChevronSmallRight className="yobta-menu-icon" />
//       </button>
//       <button type="button" className="yobta-menu-group yobta-ink" disabled>
//         <Mail className="yobta-menu-icon" />
//         <span className="yobta-menu-text">Drafts</span>
//         <ChevronSmallRight className="yobta-menu-icon" />
//       </button>
//       <a href="button" className="yobta-menu-group yobta-ink">
//         <Star className="yobta-menu-icon" />
//         <span className="yobta-menu-text">Starred</span>
//         <ChevronSmallRight className="yobta-menu-icon" />
//       </a>
//       <hr className="mx-4 my-2 border-dotted border-t-2" />
//       <button type="button" className="yobta-menu-group yobta-ink-secondary">
//         <Archive className="yobta-menu-icon" />
//         <span className="yobta-menu-text">Archive</span>
//         <ChevronSmallRight className="yobta-menu-icon" />
//       </button>
//     </>
//   )
// }
