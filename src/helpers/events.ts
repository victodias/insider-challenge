export const CartEvent = new CustomEvent('update-cart', {
  bubbles: true,
  cancelable: true
})

export function onUpdateCart() {
  return document.dispatchEvent(CartEvent)
}
