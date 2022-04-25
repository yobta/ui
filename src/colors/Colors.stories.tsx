import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Colors'
}

const Template: ComponentStory<() => JSX.Element> = () => (
  <div className="flex gap-2">
    <div className="flex flex-col gap-2">
      <div className="text-ink-primary border-ink-primary dark:text-ink-primary-dark dark:border-ink-primary-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-primary text-ink rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 mr-14">
      <div className="text-ink-secondary border-ink-secondary dark:text-ink-secondary-dark dark:border-ink-secondary-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-secondary text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-error border-ink-error dark:text-ink-error-dark dark:border-ink-error-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-error text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-success border-ink-success dark:text-ink-success-dark dark:border-ink-success-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-success text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <div className="text-ink-warning border-ink-warning dark:text-ink-warning-dark dark:border-ink-warning-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-warning text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 mr-14">
      <div className="text-ink-info border-ink-info dark:text-ink-info-dark dark:border-ink-info-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-info text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>

    <div className="flex flex-col gap-2">
      <div className="text-ink border-ink dark:text-ink-dark dark:border-ink-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-paper text-ink dark:text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
    <div className="flex flex-col gap-2 justify-end">
      <div className="text-ink border-ink-border dark:border-ink-border-dark dark:text-ink-dark dark:border-ink-dark border-2 rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
      <div className="ui-bg-paper-2 text-ink dark:text-ink-dark rounded-full w-12 h-12 flex items-center justify-center">
        T
      </div>
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
