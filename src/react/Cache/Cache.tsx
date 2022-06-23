import { Component, ReactNode } from 'react'

type Props = {
  children: ReactNode
  disabled?: boolean
}

export class Cache extends Component<Props> {
  static displayName: 'YobtaCache'
  shouldComponentUpdate({ disabled = false }: Props): boolean {
    return disabled
  }

  public render(): ReactNode {
    return this.props.children
  }
}
