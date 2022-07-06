/* eslint-disable import/extensions */
import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

import { Archive, ChevronSmallRight, Mail, PaperPlane, Star } from '../entypo'

export default {
  title: 'CSS/Menu'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<'nav'> = ({ className, ...props }) => {
  return <nav {...props} className={clsx('yobta-menu', className)} />
}

export const Simple = Template.bind({})
Simple.args = {
  className: 'w-80 yobta-paper shadow',
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

export const Advanced = Template.bind({})
Advanced.args = {
  className: 'w-80 yobta-paper shadow',
  children: (
    <>
      <header className="yobta-menu-header py-2 mb-2">Mail</header>
      <button type="button" className="yobta-menu-item yobta-ink">
        <PaperPlane />
        <span>Sent mail</span>
        <ChevronSmallRight />
      </button>
      <button type="button" className="yobta-menu-item yobta-ink" disabled>
        <Mail />
        <span>Drafts</span>
        <ChevronSmallRight />
      </button>
      <a href="button" className="yobta-menu-item yobta-ink">
        <Star />
        <span>Starred</span>
        <ChevronSmallRight />
      </a>
      <hr className="mx-4 my-2 border-dotted border-t-2" />
      <button type="button" className="yobta-menu-item yobta-ink-secondary">
        <Archive />
        <span>Archive</span>
        <ChevronSmallRight />
      </button>
    </>
  )
}
