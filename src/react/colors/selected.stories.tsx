import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Colors/Selected'
}

type TemplateFC = ComponentStory<
  (props: { classNames: string[] }) => JSX.Element
>

const Template: TemplateFC = ({ classNames }) => (
  <div className="grid gap-2 dark:yobta-selected-dark ">
    {classNames.map(value => (
      <div className="flex items-center gap-4" key={value}>
        <div className={clsx(value)}>.{value}</div>
      </div>
    ))}
  </div>
)

export const Selected = Template.bind({})
Selected.args = {
  classNames: [
    'yobta-selected-2',
    'yobta-selected-3',
    'yobta-selected-DEFAULT',
    'yobta-selected-dark'
  ]
}
