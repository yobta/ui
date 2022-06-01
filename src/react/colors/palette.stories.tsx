import { ComponentStory } from '@storybook/react'
import clsx from 'clsx'

export default {
  title: 'Colors/Palette'
}

const Color = ({ value }: { value: string }): JSX.Element => (
  <div className="flex items-center gap-2">
    <div
      className={clsx(
        'w-8 h-8 rounded-full bg-paper-primary border-ink-border border',
        value
      )}
    />
    {value}
  </div>
)

const Template: ComponentStory<() => JSX.Element> = () => (
  <>
    <h2 className="text-4xl mb-4">Fill Colors</h2>
    <table className="table-auto w-full">
      <thead>
        <tr>
          <th>Normal</th>
          <th>Dark</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <Color value="bg-paper" />
          </td>
          <td>
            <Color value="bg-paper-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-paper-2" />
          </td>
          <td>
            <Color value="bg-paper-2-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-paper-3" />
          </td>
          <td>
            <Color value="bg-paper-3-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-paper-primary" />
          </td>
          <td>
            <Color value="bg-paper-primary-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-paper-secondary" />
          </td>
          <td>
            <Color value="bg-paper-secondary-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-paper-error" />
          </td>
          <td>
            <Color value="bg-paper-error-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-success-info" />
          </td>
          <td>
            <Color value="bg-success-info-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-paper-warning" />
          </td>
          <td>
            <Color value="bg-paper-warning-dark" />
          </td>
        </tr>
        <tr>
          <td>
            <Color value="bg-paper-info" />
          </td>
          <td>
            <Color value="bg-paper-info-dark" />
          </td>
        </tr>
      </tbody>
    </table>
  </>
)

export const Primary = Template.bind({})
Primary.args = {}
