import { get, writable } from "svelte/store";


export const cartItems = writable<CartItem[]>([]);


export const addToCart = (product: Product, quantity: number) => {
  console.log('addToCart');
  let items = get(cartItems);
  let itemPosition = items.findIndex((item) => {
    return item.product.id == product.id
  })

  if(itemPosition !== -1) {
    // item is in the cart
    
    cartItems.update(() => {
      let updatedItems = items.map((item) => {
        if (item.product.id === product.id) {
          return {
            ...item, quantity: item.quantity + quantity
          }
        }
        return item
      });
      return updatedItems
    })
  } else {
    // item is not in the cart
    cartItems.update(() => {
      return [...items, {product: {...product}, quantity: quantity}]
    })
  }
}

export const removeToCart = (product: Product, quantity: number) => {
  let items = get(cartItems);
  let itemPosition = items.findIndex((item) => {
    return item.product.id == product.id
  })

  if(items[itemPosition]?.quantity - quantity <= 0) {
    items.splice(itemPosition, 1);
  }

  cartItems.update(() => {
    let updatedItems = items.map((item) => {
      if (item.product.id === product.id) {
        return {
          ...item, quantity: item.quantity - quantity
        }
      }
      return item
    });
    return updatedItems
  })

}
