import actionType from './actionType'

export const increment = (id) =>  {
  console.log(id)
  return {
    type: actionType.CART_AMOUTN_INCREMENT,
    payload: {
      id
    }
  }
}

export const decrement = (id) =>  {
  console.log(id)
  return {
    type: actionType.CART_AMOUTN_DECREMENT,
    payload: {
      id
    }
  }
}