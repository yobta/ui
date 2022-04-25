import { ComponentStory } from '@storybook/react'

export default {
  title: 'CSS/Paper'
}

const Template: ComponentStory<() => JSX.Element> = () => (
  <div className="flex gap-2">
    <div className="ui-bg-paper rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-primary rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-secondary rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-error rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-success rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-warning rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
    <div className="ui-bg-info rounded-full w-12 h-12 flex items-center justify-center">
      T
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
