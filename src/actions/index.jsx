export const ADD_ITEM = 'ADD_ITEM'

let nextItemId = 0

export const addItem = text => {
  return {
    type: ADD_ITEM,
    id: nextItemId++,
    text,
  }
}
