import { it, expect } from 'vitest'
import { renderHook, screen } from '@testing-library/react'

import { usePortalNode } from './usePortalNode.js'

type HookResult = ReturnType<typeof usePortalNode>

it('creates portal', async () => {
  let { result } = renderHook<HookResult, string>(usePortalNode, {
    initialProps: 'fakeid'
  })

  expect(result.current).not.toBeNull()
  result.current?.setAttribute('data-testid', 'testid')

  let portal = screen.getByTestId('testid')
  expect(portal).toBe(result.current)
})
