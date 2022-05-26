import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

import { Archive, ChevronSmallRight, Mail, PaperPlane, Star } from '../entypo'

export default {
  title: 'CSS/List'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<'ul'> = props => (
  <ul {...props} className={clsx('ui-list', props.className)} />
)

export const Simple = Template.bind({})
Simple.args = {
  className: 'rounded w-80 ui-bg-paper-2 ui-ink',
  children: (
    <>
      <li className="ui-list-header">Mail</li>
      <li className="ui-list-item">Sent mail</li>
      <li className="ui-list-item">Drafts</li>
      <li className="ui-list-item">Starred</li>
      <hr className="mx-4 my-2" />
      <li className="ui-list-item">Archive</li>
    </>
  )
}

export const Advanced = Template.bind({})
Advanced.args = {
  className: 'rounded w-80 ui-bg-paper-2 ui-ink',
  children: (
    <>
      <li className="ui-list-header">Mail</li>
      <li className="ui-list-group">
        <PaperPlane className="ui-list-icon" />
        <span className="ui-list-text">Sent mail</span>
        <ChevronSmallRight className="ui-list-icon" />
      </li>
      <li className="ui-list-group">
        <Mail className="ui-list-icon" />
        <span className="ui-list-text">Drafts</span>
        <ChevronSmallRight className="ui-list-icon" />
      </li>
      <li className="ui-list-group">
        <Star className="ui-list-icon" />
        <span className="ui-list-text">Starred</span>
        <ChevronSmallRight className="ui-list-icon" />
      </li>
      <hr className="mx-4 my-2 border-dotted border-t-2 opacity-100" />
      <li className="ui-list-group">
        <Archive className="ui-list-icon" />
        <span className="ui-list-text">Archive</span>
        <ChevronSmallRight className="ui-list-icon" />
      </li>
    </>
  )
}
