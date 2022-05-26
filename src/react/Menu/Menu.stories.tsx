import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

import { Archive, ChevronSmallRight, Mail, PaperPlane, Star } from '../entypo'

export default {
  title: 'CSS/Menu'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<'nav'> = props => (
  <nav {...props} className={clsx('ui-menu', props.className)} />
)

export const Simple = Template.bind({})
Simple.args = {
  className: 'w-80 ui-bg-paper ui-ink shadow',
  children: (
    <>
      <header className="ui-menu-header py-2 mb-2">Mail</header>
      <button type="button" className="ui-menu-item">
        Sent mail
      </button>
      <button type="button" className="ui-menu-item">
        Drafts
      </button>
      <button type="button" className="ui-menu-item">
        Starred
      </button>
      <hr className="mx-4 my-2" />
      <button type="button" className="ui-menu-item">
        Archive
      </button>
    </>
  )
}

export const Advanced = Template.bind({})
Advanced.args = {
  className: 'w-80 ui-bg-paper ui-ink shadow',
  children: (
    <>
      <header className="ui-menu-header py-2 mb-2">Mail</header>
      <button type="button" className="ui-menu-group ui-ink">
        <PaperPlane className="ui-menu-icon" />
        <span className="ui-menu-text">Sent mail</span>
        <ChevronSmallRight className="ui-menu-icon" />
      </button>
      <button type="button" className="ui-menu-group ui-ink" disabled>
        <Mail className="ui-menu-icon" />
        <span className="ui-menu-text">Drafts</span>
        <ChevronSmallRight className="ui-menu-icon" />
      </button>
      <a href="button" className="ui-menu-group ui-ink">
        <Star className="ui-menu-icon" />
        <span className="ui-menu-text">Starred</span>
        <ChevronSmallRight className="ui-menu-icon" />
      </a>
      <hr className="mx-4 my-2 border-dotted border-t-2" />
      <button type="button" className="ui-menu-group ui-ink-secondary">
        <Archive className="ui-menu-icon" />
        <span className="ui-menu-text">Archive</span>
        <ChevronSmallRight className="ui-menu-icon" />
      </button>
    </>
  )
}
