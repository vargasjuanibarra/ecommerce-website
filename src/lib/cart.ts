import { get, writable } from "svelte/store";


export const cartItems = writable<CartItem[]>([]);


export const addToCart = (id: string, quantity: number) => {
  console.log('addToCart');
  let items = get(cartItems);
  let itemPosition = items.findIndex((item) => {
    return item.id == id
  })

  if(itemPosition !== -1) {
    // item is in the cart
    
    cartItems.update(() => {
      let updatedItems = items.map((item) => {
        if (item.id === id) {
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
      return [...items, {id, quantity: quantity}]
    })
  }
}

export const removeToCart = (id: string, quantity: number) => {
  let items = get(cartItems);
  let itemPosition = items.findIndex((item) => {
    return item.id == id
  })

  if(items[itemPosition]?.quantity - quantity <= 0) {
    items.splice(itemPosition, 1);
  }

  cartItems.update(() => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item, quantity: item.quantity - quantity
        }
      }
      return item
    });
    return updatedItems
  })

}
