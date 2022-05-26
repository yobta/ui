import { createInput } from './createInput.js'

export const Input = createInput({})

export const PasswordInput = createInput({
  autoCapitalize: 'off',
  autoComplete: 'current-password',
  autoCorrect: 'off',
  type: 'password'
})
