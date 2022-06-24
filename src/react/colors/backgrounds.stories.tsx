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
    'yobta-bg-paper',
    'yobta-bg-paper-2',
    'yobta-bg-paper-3',
    'yobta-bg-primary',
    'yobta-bg-secondary',
    'yobta-bg-error',
    'yobta-bg-success',
    'yobta-bg-warning',
    'yobta-bg-info'
  ]
}

export const ExrtraColors = Template.bind({})
ExrtraColors.args = {
  classNames: [
    'yobta-bg-1',
    'yobta-bg-2',
    'yobta-bg-3',
    'yobta-bg-4',
    'yobta-bg-5',
    'yobta-bg-6',
    'yobta-bg-7',
    'yobta-bg-8',
    'yobta-bg-9',
    'yobta-bg-10',
    'yobta-bg-11',
    'yobta-bg-12',
    'yobta-bg-13',
    'yobta-bg-14',
    'yobta-bg-15',
    'yobta-bg-16'
  ]
}
