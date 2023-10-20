import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { createUiPortal } from './createUiPortal.js'

it('creates a component and passes the node from the portal to it', () => {
  let App = (): JSX.Element => {
    return React.createElement('div', { id: 'nodeid' }, 'Element')
  }

  let Portal = (): JSX.Element => {
    return <>{createUiPortal(<span>NewElement</span>, 'nodeid')}</>
  }

  render(<App />)
  render(<Portal />)
  let element = screen.getByText<HTMLElement>('Element')
  expect(element).toMatchSnapshot()
})
