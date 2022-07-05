/* eslint-disable import/extensions */
import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

import { Archive, ChevronSmallRight, Mail, PaperPlane, Star } from '../entypo'

export default {
  title: 'CSS/List old'
}

export type LinearProgressProps = { className?: string }

const Template: ComponentStory<'ul'> = props => (
  <ul {...props} className={clsx('yobta-list', props.className)} />
)

export const Simple = Template.bind({})
Simple.args = {
  className: 'rounded w-80 yobta-bg-paper-2 yobta-ink',
  children: (
    <>
      <li className="yobta-list-header">Mail</li>
      <li className="yobta-list-item">Sent mail</li>
      <li className="yobta-list-item">Drafts</li>
      <li className="yobta-list-item">Starred</li>
      <hr className="mx-4 my-2" />
      <li className="yobta-list-item">Archive</li>
    </>
  )
}

export const Advanced = Template.bind({})
Advanced.args = {
  className: 'rounded w-80 yobta-bg-paper-2 yobta-ink',
  children: (
    <>
      <li className="yobta-list-header">Mail</li>
      <li className="yobta-list-group">
        <PaperPlane className="yobta-list-icon" />
        <span className="yobta-list-text">Sent mail</span>
        <ChevronSmallRight className="yobta-list-icon" />
      </li>
      <li className="yobta-list-group">
        <Mail className="yobta-list-icon" />
        <span className="yobta-list-text">Drafts</span>
        <ChevronSmallRight className="yobta-list-icon" />
      </li>
      <li className="yobta-list-group">
        <Star className="yobta-list-icon" />
        <span className="yobta-list-text">Starred</span>
        <ChevronSmallRight className="yobta-list-icon" />
      </li>
      <hr className="mx-4 my-2 border-dotted border-t-2 opacity-100" />
      <li className="yobta-list-group">
        <Archive className="yobta-list-icon" />
        <span className="yobta-list-text">Archive</span>
        <ChevronSmallRight className="yobta-list-icon" />
      </li>
    </>
  )
}
