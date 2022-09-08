import { it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import React from 'react'
import { createRoot } from 'react-dom/client'

import { createUiPortal } from './createUiPortal.js'

it('createUiPortal', () => {
  let rootElement = document.createElement('div')
  rootElement.id = 'root'
  document.body.append(rootElement)

  let App = (): JSX.Element => {
    return (
      <>
        {createUiPortal(<span>NewText</span>, 'nodeid')}
        <div id="nodeid">Element</div>
      </>
    )
  }

  let container = document.getElementById('root')
  let root = createRoot(container!)
  root.render(<App />)

  let element = screen.getByText('NewText')

  expect(element)
})
