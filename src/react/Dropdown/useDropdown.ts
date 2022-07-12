import {
  ForwardedRef,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState
} from 'react'

import { subscribe } from '../helpers/index.js'
import {
  useCombineRefs,
  useDependencyChangeCount,
  usePopoverCoordinates,
  usePortalNode
} from '../hooks/index.js'
import { PopoverPlacementOptions } from '../hooks/usePopoverCoordinates/getOptimalPopoverPlacement.js'
import { getAnimationClassName } from './getAnimationClassName.js'
import { useDropdownStyle } from './useDropdownStyle.js'

interface DropDownHook {
  (props: {
    blockLevel?: boolean
    forwardedRef: ForwardedRef<HTMLElement>
    offset: number
    placement?: PopoverPlacementOptions
    preferredPlacement?: PopoverPlacementOptions
    portalNodeId?: string
    producerRef?: RefObject<HTMLElement>
    visible: boolean
  }): {
    animationClassName: string | null
    combinedRef: Ref<HTMLElement>
    hiddenClassName: string | null
    portalNode: HTMLElement | null
  }
}

const hiddenClassName = 'yobta-dropdown--hidden'

export const useDropdown: DropDownHook = ({
  blockLevel,
  forwardedRef,
  offset,
  placement,
  portalNodeId,
  preferredPlacement,
  producerRef,
  visible
}) => {
  let [, update] = useState({})
  let [forceHide, setForceHide] = useState(!visible)
  let portalNode = usePortalNode(portalNodeId)
  let consumerRef = useRef<HTMLElement>(null)
  let combinedRef = useCombineRefs<HTMLElement>(forwardedRef, consumerRef)
  let isTriggered = useDependencyChangeCount(visible) > 0

  let placementProps = placement ? { placement } : { preferredPlacement }

  useEffect(() => {
    if (isTriggered && visible && consumerRef.current) {
      consumerRef.current.classList.remove(hiddenClassName)
      setForceHide(false)
    }
  }, [visible, isTriggered])

  useEffect(() => {
    let handleAnimationEnd = (event: AnimationEvent): void => {
      if (
        !visible &&
        consumerRef.current &&
        event.target === consumerRef.current
      ) {
        consumerRef.current.classList.add(hiddenClassName)
        update({})
      }
    }
    let unsubscribe = subscribe(
      consumerRef.current,
      'animationend',
      handleAnimationEnd as EventListenerOrEventListenerObject
    )
    return unsubscribe
  }, [visible])

  let position = usePopoverCoordinates({
    ...placementProps,
    disabled: !visible,
    producerNode: producerRef?.current,
    consumerNode: consumerRef.current,
    offset
  })

  useDropdownStyle({ blockLevel, consumerRef, producerRef, position })

  let isActive = !!position && visible
  let animationClassName =
    position && getAnimationClassName(position.placement, isActive)

  return {
    animationClassName,
    combinedRef,
    hiddenClassName: forceHide ? hiddenClassName : null,
    portalNode
  }
}
