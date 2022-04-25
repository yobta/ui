import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Ink'
}

const Template: ComponentStory<() => JSX.Element> = () => (
  <div className="flex gap-2">
    <div className="ui-ink border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-ink-2 border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-ink-primary border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-ink-secondary border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-ink-error border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-ink-success border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-ink-warning border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-ink-info border-2 rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
