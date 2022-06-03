import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Colors/Border Plugin'
}

type TemplateFC = ComponentStory<
  (props: { classNames: string[] }) => JSX.Element
>

const Template: TemplateFC = ({ classNames }) => (
  <div className="grid gap-2 dark:text-ink-dark">
    {classNames.map(value => (
      <div className="flex items-center gap-4" key={value}>
        <div className={clsx(value, 'w-7 h-7 rounded-full border-2')} />.{value}
      </div>
    ))}
  </div>
)

export const Ink = Template.bind({})
Ink.args = {
  classNames: [
    'ui-border-ink',
    'ui-border-ink-2',
    'ui-border-ink-primary',
    'ui-border-ink-secondary',
    'ui-border-ink-error',
    'ui-border-ink-success',
    'ui-border-ink-warning',
    'ui-border-ink-info',
    'ui-border-ink-border'
  ]
}

export const Paper = Template.bind({})
Paper.args = {
  classNames: [
    'ui-border-paper',
    'ui-border-paper-2',
    'ui-border-paper-3',
    'ui-border-paper-primary'
  ]
}

export const Additional = Template.bind({})
Additional.args = {
  classNames: ['ui-border-color-1', 'ui-border-color-2', 'ui-border-color-3']
}
