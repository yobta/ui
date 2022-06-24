import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'CSS/Switch'
}

const Checkbox: ComponentStory<'input'> = props => (
  <input type="checkbox" {...props} />
)

const Radio: ComponentStory<'form'> = ({ className, ...props }) => (
  <form
    className={clsx(
      'ui-menu yobta-bg-paper-2 yobta-ink shadow max-w-sm',
      className
    )}
    {...props}
  />
)

export const Default = Checkbox.bind({})
Default.args = { className: 'ui-switch' }

export const Primary = Checkbox.bind({})
Primary.args = { className: 'ui-switch checked:yobta-bg-primary' }

export const Small = Checkbox.bind({})
Small.args = { className: 'ui-switch-small checked:yobta-bg-success' }

export const Big = Checkbox.bind({})
Big.args = {
  className: 'yobta-bg-error ui-switch-big checked:yobta-bg-info',
  defaultChecked: true
}

export const MutiallyExclusive = Radio.bind({})
MutiallyExclusive.args = {
  children: (
    <>
      <header className="ui-list-header">Choose one</header>
      <label className="ui-menu-group">
        <span className="ui-menu-text">One</span>
        <input
          type="radio"
          name="option"
          className="ui-switch checked:yobta-bg-success ui-menu-icon"
          value="1"
        />
      </label>
      <label className="ui-menu-group">
        <span className="ui-menu-text">Two</span>
        <input
          type="radio"
          name="option"
          className="ui-switch checked:yobta-bg-success ui-menu-icon"
          value="2"
        />
      </label>
      <label className="ui-menu-group">
        <span className="ui-menu-text">Three</span>
        <input
          type="radio"
          name="option"
          className="ui-switch checked:yobta-bg-success ui-menu-icon"
          value="3"
        />
      </label>
    </>
  ),
  className: '',
  defaultChecked: true
}
