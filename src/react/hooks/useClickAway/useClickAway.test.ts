import { it, expect, vi } from 'vitest'

it('fires click event when clicked outside', () => {
  // проверить что при клике вне референса вызывается колбек
})
it('does not fire fires click event when clicked intside', () => {
  // проверить что при клике внутри референса не вызывается колбек
})
it('updates onClickAway instance when changed', () => {
  // при рирендере подменить колбек и проверить что старый не вызывается
})
it('has default eventTypes', () => {
  // проверить что на стаб добавляются дифолтные типы
})
it('taked custom eventTypes', () => {
  // проверить что на стаб добавляются кастомные типы
})
it('unsubscribes on exit', () => {
  // проверить что со стаба сносятся подписки при анмаунте
})
it('resubscribes on eventTypes change', () => {
  // проверить что со стаба сносятся и добавляются подписки при смене eventTypes
})
it('resubscribes on ref.current change', () => {
  // проверить что со стаба сносятся и добавляются подписки при смене ref.current
})
