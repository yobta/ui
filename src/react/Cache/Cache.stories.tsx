import { ComponentStory } from '@storybook/react'
import { useState, useEffect } from 'react'

import { Cache } from './Cache'

export default {
  title: 'React/Cache'
}

const Checkbox: ComponentStory<typeof Cache> = props => {
  let [date, setDate] = useState(new Date())

  useEffect(() => {
    let interval = setInterval(() => {
      setDate(new Date())
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <Cache {...props}>Time: {date.toLocaleTimeString()}</Cache>
}

export const Enabled = Checkbox.bind({})
Enabled.args = {}

export const Disabled = Checkbox.bind({})
Disabled.args = { disabled: true }
