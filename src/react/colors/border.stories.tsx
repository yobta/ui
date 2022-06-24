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
    'yobta-border-ink',
    'yobta-border-ink-2',
    'yobta-border-ink-primary',
    'yobta-border-ink-secondary',
    'yobta-border-ink-error',
    'yobta-border-ink-success',
    'yobta-border-ink-warning',
    'yobta-border-ink-info',
    'yobta-border-ink-border'
  ]
}

export const Paper = Template.bind({})
Paper.args = {
  classNames: [
    'yobta-border-paper',
    'yobta-border-paper-2',
    'yobta-border-paper-3',
    'yobta-border-paper-primary',
    'yobta-border-paper-secondary',
    'yobta-border-paper-error',
    'yobta-border-paper-success',
    'yobta-border-paper-warning',
    'yobta-border-paper-info'
  ]
}

export const Additional = Template.bind({})
Additional.args = {
  classNames: [
    'yobta-border-color-1',
    'yobta-border-color-2',
    'yobta-border-color-3',
    'yobta-border-color-4',
    'yobta-border-color-5',
    'yobta-border-color-6',
    'yobta-border-color-7',
    'yobta-border-color-8',
    'yobta-border-color-9',
    'yobta-border-color-10',
    'yobta-border-color-11',
    'yobta-border-color-12',
    'yobta-border-color-13',
    'yobta-border-color-14',
    'yobta-border-color-15',
    'yobta-border-color-16'
  ]
}
