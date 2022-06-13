// useEffect(() => {
//   let handleFocus = (): void => {
//     setHasFocus(true)
//   }
//   let handleBlur = (): void => {
//     setHasFocus(false)
//   }
//   let handleMouseOver = (): void => {
//     setHasCursor(true)
//   }
//   let handleMouseOut = (): void => {
//     setHasCursor(false)
//   }
//   let forceHide = (): void => {
//     setHasCursor(false)
//     setHasFocus(false)
//   }

//   if (producerNode) {
//     producerNode.addEventListener('mouseover', handleMouseOver)
//     producerNode.addEventListener('mouseout', handleMouseOut)
//     producerNode.addEventListener('focus', handleFocus)
//     producerNode.addEventListener('blur', handleBlur)
//     document.addEventListener('wheel', forceHide, {
//       passive: true
//     })
//     window.addEventListener('resize', forceHide, {
//       passive: true
//     })
//   }
//   return () => {
//     if (producerNode) {
//       producerNode.removeEventListener('mouseover', handleMouseOver)
//       producerNode.removeEventListener('mouseout', handleMouseOut)
//       producerNode.removeEventListener('focus', handleFocus)
//       producerNode.removeEventListener('blur', handleBlur)
//       document.removeEventListener('wheel', forceHide)
//       window.removeEventListener('resize', forceHide)
//     }
//     forceHide()
//   }
// }, [producerNode])
