import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Colors/Text'
}

type TemplateFC = ComponentStory<
  (props: { classNames: string[] }) => JSX.Element
>

const Template: TemplateFC = ({ classNames }) => (
  <div className="grid gap-2 dark:text-ink-dark">
    {classNames.map(value => (
      <div className="flex items-center gap-4" key={value}>
        <span className={clsx(value)}>.{value}</span>
      </div>
    ))}
  </div>
)

export const Ink = Template.bind({})
Ink.args = {
  classNames: [
    'ui-text-ink',
    'ui-text-ink-2',
    'ui-text-ink-primary',
    'ui-text-ink-secondary',
    'ui-text-ink-error',
    'ui-text-ink-success',
    'ui-text-ink-warning',
    'ui-text-ink-info',
    'ui-text-ink-border'
  ]
}

export const Link = Template.bind({})
Link.args = {
  classNames: [
    'ui-text-link',
    'ui-text-link-hover',
    'ui-text-link-active',
    'ui-text-link-visited',
  ]
}

export const Additional = Template.bind({})
Additional.args = {
  classNames: [
    'ui-text-color-1',
    'ui-text-color-2',
    'ui-text-color-3',
    'ui-text-color-4',
    'ui-text-color-5',
    'ui-text-color-6',
    'ui-text-color-7',
    'ui-text-color-8',
    'ui-text-color-9',
    'ui-text-color-10',
    'ui-text-color-11',
    'ui-text-color-12',
    'ui-text-color-13',
    'ui-text-color-14',
    'ui-text-color-15',
    'ui-text-color-16'
  ]
}
