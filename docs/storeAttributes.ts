//@ts-ignore
import { createStore, createEvent, combine, sample } from 'effector';

export const initAttributes = createEvent('init attributes');
export const updateAttribute = createEvent('update attribute');

// const state = createStore('idle');
// const error = createStore(null);
const data = createStore({});

const attributes = combine({ data });

// data.on(initAttributes, (_store, props) => {
//   console.log('props', props);

//   return props
// });

data.on(updateAttribute, (_store, event: any) => {
  const newData = {
    ..._store,
    [event.target.name]: {
      ..._store[event.target.name],
      ...(event.target.value != null && { value: event.target.value }),
      ...(event.target.checked != null && { checked: event.target.checked })
    }
  }
  return newData
});

sample({
  source: initAttributes, /* 1 */
  //@ts-ignore
  fn: (_, props) => (props), /* 2 */
  //@ts-ignore
  target: data, /* 3 */
});

export default attributes;
