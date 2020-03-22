import actionType from '../actions/actionType'

const cartList = [
  {
    id: 1,
    goods: 'apple',
    price: 100,
    amount: 10
  },
  {
    id: 2,
    goods: 'orange',
    price: 1001,
    amount: 101
  },
  {
    id: 3,
    goods: 'banana',
    price: 1010,
    amount: 110
  }
]

export default (state = cartList, action) => {
  switch (action.type) {
    case actionType.CART_AMOUTN_DECREMENT:
      return state.map(item => {
          if (item.id === action.payload.id) {
            item.amount -= 1
          }
          return item
      })
    case actionType.CART_AMOUTN_INCREMENT:
      return state.map(item => {
        if (item.id === action.payload.id) {
          item.amount += 1
        }
        return item
      })
    default:
      return state
  }
} 