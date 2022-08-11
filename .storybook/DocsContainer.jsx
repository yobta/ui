import React from 'react'
import { DocsContainer as BaseContainer } from '@storybook/addon-docs/blocks'
import { useDarkMode } from 'storybook-dark-mode'
import { themes } from '@storybook/theming'

const styles = /* CSS */ `
  .yobta-paper.improve > .sbdocs.sbdocs-wrapper {
    background: inherit;
  }

  .yobta-paper.improve .sbdocs.sbdocs-preview {
    background: inherit;
  }
`

export const DocsContainer = ({ children, context }) => {
  const dark = useDarkMode()

  return (
    <>
      <style>{styles}</style>
      <div className="yobta-paper improve">
        <BaseContainer
          context={{
            ...context,
            storyById: id => {
              const storyContext = context.storyById(id)
              return {
                ...storyContext,
                parameters: {
                  ...storyContext?.parameters,
                  docs: {
                    ...storyContext?.parameters?.docs,
                    theme: dark ? themes.dark : themes.light
                  }
                }
              }
            }
          }}
        >
          {children}
        </BaseContainer>
      </div>
    </>
  )
}
