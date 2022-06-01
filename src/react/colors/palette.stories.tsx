import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Colors/Palette'
}

const Fill = ({
  dark,
  value
}: {
  dark?: boolean
  value: string
}): JSX.Element => (
  <div className="flex items-center gap-4">
    <div
      className={clsx(
        'w-7 h-7 rounded-full border',
        value,
        dark ? 'border-ink-border-dark' : 'border-ink-border'
      )}
    />
    {value}
  </div>
)

const Stroke = ({ value }: { value: string }): JSX.Element => (
  <div className="flex items-center gap-4">
    <div className={clsx('w-7 h-7 rounded border-2', value)} />
    {value}
  </div>
)

const ExtraFill = ({ value }: { value: string }): JSX.Element => (
  <div className="flex items-center gap-4">
    <div className={clsx('w-7 h-7 rounded', value)} />
    {value}
  </div>
)

const Template: ComponentStory<() => JSX.Element> = () => (
  <div>
    <h2 className="text-4xl mb-4 ml-4">Fill Colors</h2>
    <div className="sm:grid grid-cols-2">
      <div>
        <h4 className="font-bold ml-4">Normal</h4>
        <div className="p-4 grid gap-2 bg-paper text-ink rounded">
          <Fill value="bg-paper" />
          <Fill value="bg-paper-2" />
          <Fill value="bg-paper-3" />
          <Fill value="bg-paper-primary" />
          <Fill value="bg-paper-secondary" />
          <Fill value="bg-paper-error" />
          <Fill value="bg-paper-success" />
          <Fill value="bg-paper-warning" />
          <Fill value="bg-paper-info" />
        </div>
      </div>
      <div>
        <h4 className="font-bold ml-4">Dark</h4>
        <div className="p-4 bg-paper-dark text-ink-dark rounded grid gap-2">
          <Fill dark value="bg-paper-dark" />
          <Fill dark value="bg-paper-2-dark" />
          <Fill value="bg-paper-3-dark" />
          <Fill value="bg-paper-primary-dark" />
          <Fill value="bg-paper-secondary-dark" />
          <Fill value="bg-paper-error-dark" />
          <Fill value="bg-paper-success-dark" />
          <Fill value="bg-paper-warning-dark" />
          <Fill value="bg-paper-info-dark" />
        </div>
      </div>
    </div>
    <h2 className="text-4xl mb-4 ml-4">Stroke Colors</h2>
    <div className="sm:grid grid-cols-2">
      <div>
        <h4 className="font-bold ml-4">Normal</h4>
        <div className="p-4 grid gap-2 bg-paper text-ink rounded">
          <Stroke value="border-ink" />
          <Stroke value="border-ink-2" />
          <Stroke value="border-ink-primary" />
          <Stroke value="border-ink-secondary" />
          <Stroke value="border-ink-error" />
          <Stroke value="border-ink-success" />
          <Stroke value="border-ink-warning" />
          <Stroke value="border-ink-info" />
          <Stroke value="border-ink-border" />
        </div>
      </div>
      <div>
        <h4 className="font-bold ml-4">Dark</h4>
        <div className="p-4 bg-paper-dark text-ink-dark rounded grid gap-2">
          <Stroke value="border-ink-dark" />
          <Stroke value="border-ink-2-dark" />
          <Stroke value="border-ink-primary-dark" />
          <Stroke value="border-ink-secondary-dark" />
          <Stroke value="border-ink-error-dark" />
          <Stroke value="border-ink-success-dark" />
          <Stroke value="border-ink-warning-dark" />
          <Stroke value="border-ink-info-dark" />
          <Stroke value="border-ink-border-dark" />
        </div>
      </div>
    </div>
    <h2 className="text-4xl mb-4 ml-4">Link Colors</h2>
    <div className="sm:grid grid-cols-2">
      <div>
        <h4 className="font-bold ml-4">Normal</h4>
        <div className="p-4 grid gap-2 bg-paper text-ink rounded">
          <span className="text-link">text-link</span>
          <span className="text-link-hover">text-link-hover</span>
          <span className="text-link-active">text-link-active</span>
          <span className="text-link-visited">text-link-visited</span>
        </div>
      </div>
      <div>
        <h4 className="font-bold ml-4">Dark</h4>
        <div className="p-4 bg-paper-dark text-ink-dark rounded grid gap-2">
          <span className="text-link-dark">text-link-dark</span>
          <span className="text-link-hover-dark">text-link-hover-dark</span>
          <span className="text-link-active-dark">text-link-active-dark</span>
          <span className="text-link-visited-dark">text-link-visited-dark</span>
        </div>
      </div>
    </div>
    <h2 className="text-4xl mb-4 ml-4">Extra Fill Colors</h2>
    <div className="sm:grid grid-cols-2">
      <div>
        <h4 className="font-bold ml-4">Normal</h4>
        <div className="p-4 grid gap-2 bg-paper text-ink rounded">
          <ExtraFill value="bg-1" />
          <ExtraFill value="bg-2" />
          <ExtraFill value="bg-3" />
          <ExtraFill value="bg-4" />
          <ExtraFill value="bg-5" />
          <ExtraFill value="bg-6" />
          <ExtraFill value="bg-7" />
          <ExtraFill value="bg-8" />
          <ExtraFill value="bg-9" />
          <ExtraFill value="bg-10" />
          <ExtraFill value="bg-11" />
          <ExtraFill value="bg-12" />
          <ExtraFill value="bg-13" />
          <ExtraFill value="bg-14" />
          <ExtraFill value="bg-15" />
          <ExtraFill value="bg-16" />
        </div>
      </div>
      <div>
        <h4 className="font-bold ml-4">Dark</h4>
        <div className="p-4 bg-paper-dark text-ink-dark rounded grid gap-2">
          <ExtraFill value="bg-1-dark" />
          <ExtraFill value="bg-2-dark" />
          <ExtraFill value="bg-3-dark" />
          <ExtraFill value="bg-4-dark" />
          <ExtraFill value="bg-5-dark" />
          <ExtraFill value="bg-6-dark" />
          <ExtraFill value="bg-7-dark" />
          <ExtraFill value="bg-8-dark" />
          <ExtraFill value="bg-9-dark" />
          <ExtraFill value="bg-10-dark" />
          <ExtraFill value="bg-11-dark" />
          <ExtraFill value="bg-12-dark" />
          <ExtraFill value="bg-13-dark" />
          <ExtraFill value="bg-14-dark" />
          <ExtraFill value="bg-15-dark" />
          <ExtraFill value="bg-16-dark" />
        </div>
      </div>
    </div>
  </div>
)

export const Primary = Template.bind({})
Primary.args = {}
