import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Colors/Background Plugin'
}

const Template: ComponentStory<
  (props: { classNames: string[] }) => JSX.Element
> = ({ classNames }) => (
  <div className="dark:text-ink-dark ml-4 grid gap-2">
    {classNames.map(className => (
      <div className="flex items-center gap-4" key={className}>
        <div
          className={clsx(
            className,
            'w-7 h-7 rounded-full border border-ink-border dark:border-ink-border-dark'
          )}
        />
        .{className}
      </div>
    ))}
  </div>
)

export const MainColors = Template.bind({})
MainColors.args = {
  classNames: [
    'ui-bg-paper',
    'ui-bg-paper-2',
    'ui-bg-paper-3',
    'ui-bg-primary',
    'ui-bg-secondary',
    'ui-bg-error',
    'ui-bg-success',
    'ui-bg-warning',
    'ui-bg-info'
  ]
}

export const ExrtraColors = Template.bind({})
ExrtraColors.args = {
  classNames: [
    'ui-bg-1',
    'ui-bg-2',
    'ui-bg-3',
    'ui-bg-4',
    'ui-bg-5',
    'ui-bg-6',
    'ui-bg-7',
    'ui-bg-8',
    'ui-bg-9',
    'ui-bg-10',
    'ui-bg-11',
    'ui-bg-12',
    'ui-bg-13',
    'ui-bg-14',
    'ui-bg-15',
    'ui-bg-16'
  ]
}
