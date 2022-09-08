import { it, expect } from 'vitest'
import { screen } from '@testing-library/react'
import React from 'react'
import ReactDOM from 'react-dom'

import { createUiPortal } from './createUiPortal.js'

it('createUiPortal', () => {
  let root = document.createElement('div')
  root.id = 'root'
  document.body.append(root)

  ReactDOM.render(
    React.createElement('div', { id: 'nodeElem' }, 'Element'),
    document.getElementById('root')
  )

  let element = screen.getByText('Element')

  expect(element)
})
