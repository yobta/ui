import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from './Page'

export default {
  title: 'React/Page',
  component: Page
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = () => <Page />

export const LoggedIn = Template.bind({})
LoggedIn.args = {}

export const LoggedOut = Template.bind({})
LoggedOut.args = {}
