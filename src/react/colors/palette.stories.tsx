import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Colors/Palette'
}

// const Stroke = ({ value }: { value: string }): JSX.Element => (
//   <div className="flex items-center gap-4">
//     <div className={clsx('w-7 h-7 rounded border-2', value)} />
//     {value}
//   </div>
// )

type Template = ComponentStory<
  (props: {
    classNamesLight: string[]
    classNamesDark: string[]
  }) => JSX.Element
>

const FillsTemplate: Template = ({ classNamesLight, classNamesDark }) => (
  <div className="dark:text-ink-dark">
    <div className="sm:grid grid-cols-2 gap-2 mb-12">
      <div>
        <h4 className="font-bold ml-4">Light</h4>
        <div className="p-4 grid gap-2 bg-paper text-ink rounded">
          {classNamesLight.map(value => (
            <div className="flex items-center gap-4" key={value}>
              <div
                className={clsx(
                  value,
                  'w-7 h-7 rounded-full border border-ink-border'
                )}
              />
              .{value}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold ml-4">Dark</h4>
        <div className="p-4 bg-paper-dark text-ink-dark rounded grid gap-2">
          {classNamesDark.map(value => (
            <div className="flex items-center gap-4" key={value}>
              <div
                className={clsx(
                  value,
                  'w-7 h-7 rounded-full border border-ink-border-dark'
                )}
              />
              .{value}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const LinksTemplate: Template = ({ classNamesLight, classNamesDark }) => (
  <div className="dark:text-ink-dark">
    <div className="sm:grid grid-cols-2 gap-2 mb-12">
      <div>
        <h4 className="font-bold ml-4">Light</h4>
        <div className="p-4 grid gap-2 bg-paper text-ink rounded">
          {classNamesLight.map(value => (
            <span className={value} key={value}>
              .{value}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold ml-4">Dark</h4>
        <div className="p-4 bg-paper-dark text-ink-dark rounded grid gap-2">
          {classNamesDark.map(value => (
            <span className={value} key={value}>
              .{value}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
)

const StrokeTemplate: Template = ({ classNamesLight, classNamesDark }) => (
  <div className="dark:text-ink-dark">
    <div className="sm:grid grid-cols-2 gap-2 mb-12">
      <div>
        <h4 className="font-bold ml-4">Light</h4>
        <div className="p-4 grid gap-2 bg-paper text-ink rounded">
          {classNamesLight.map(value => (
            <div className="flex items-center gap-4" key={value}>
              <div className={clsx(value, 'w-7 h-7 rounded border-2')} />.
              {value}
            </div>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-bold ml-4">Dark</h4>
        <div className="p-4 bg-paper-dark text-ink-dark rounded grid gap-2">
          {classNamesDark.map(value => (
            <div className="flex items-center gap-4" key={value}>
              <div className={clsx(value, 'w-7 h-7 rounded border-2')} />.
              {value}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

export const FillColors = FillsTemplate.bind({})
FillColors.args = {
  classNamesLight: [
    'bg-paper',
    'bg-paper-2',
    'bg-paper-3',
    'bg-paper-primary',
    'bg-paper-secondary',
    'bg-paper-error',
    'bg-paper-success',
    'bg-paper-warning',
    'bg-paper-info'
  ],
  classNamesDark: [
    'bg-paper-dark',
    'bg-paper-2-dark',
    'bg-paper-3-dark',
    'bg-paper-primary-dark',
    'bg-paper-secondary-dark',
    'bg-paper-error-dark',
    'bg-paper-success-dark',
    'bg-paper-warning-dark',
    'bg-paper-info-dark'
  ]
}

export const AdditionalFillColors = FillsTemplate.bind({})
AdditionalFillColors.args = {
  classNamesLight: [
    'bg-color-1',
    'bg-color-2',
    'bg-color-3',
    'bg-color-4',
    'bg-color-5',
    'bg-color-6',
    'bg-color-7',
    'bg-color-8',
    'bg-color-9',
    'bg-color-10',
    'bg-color-11',
    'bg-color-12',
    'bg-color-13',
    'bg-color-14',
    'bg-color-15',
    'bg-color-16'
  ],
  classNamesDark: [
    'bg-color-1-dark',
    'bg-color-2-dark',
    'bg-color-3-dark',
    'bg-color-4-dark',
    'bg-color-5-dark',
    'bg-color-6-dark',
    'bg-color-7-dark',
    'bg-color-8-dark',
    'bg-color-9-dark',
    'bg-color-10-dark',
    'bg-color-11-dark',
    'bg-color-12-dark',
    'bg-color-13-dark',
    'bg-color-14-dark',
    'bg-color-15-dark',
    'bg-color-16-dark'
  ]
}

export const StrokeColors = StrokeTemplate.bind({})
StrokeColors.args = {
  classNamesLight: [
    'border-ink',
    'border-ink-2',
    'border-ink-primary',
    'border-ink-secondary',
    'border-ink-error',
    'border-ink-success',
    'border-ink-warning',
    'border-ink-info',
    'border-ink-border'
  ],
  classNamesDark: [
    'border-ink-dark',
    'border-ink-2-dark',
    'border-ink-primary-dark',
    'border-ink-secondary-dark',
    'border-ink-error-dark',
    'border-ink-success-dark',
    'border-ink-warning-dark',
    'border-ink-info-dark',
    'border-ink-border-dark'
  ]
}

export const LinkColors = LinksTemplate.bind({})
LinkColors.args = {
  classNamesLight: [
    'text-link',
    'text-link-hover',
    'text-link-active',
    'text-link-visited'
  ],
  classNamesDark: [
    'text-link-dark',
    'text-link-hover-dark',
    'text-link-active-dark',
    'text-link-visited-dark'
  ]
}
