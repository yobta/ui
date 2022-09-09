import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from 'react'

import { createUiPortal } from './createUiPortal.js'

it('creates a component and passes the node from the portal to it', () => {
  let App = (): JSX.Element => {
    return (
      <>
        {createUiPortal(<span>NewElement</span>, 'nodeid')}
        <div id="nodeid">Element</div>
      </>
    )
  }

  render(<App />)
  let element = screen.getByText<HTMLElement>('Element')

  expect(element).toMatchSnapshot()
})
