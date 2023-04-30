import * as Siva from '../packages'
import propsIcon from '../packages/icon/icon.schema.json'
import propsButton from '../packages/button/button.schema.json'
import propsRadio from '../packages/radio/radio.schema.json'
import propsCheckbox from '../packages/checkbox/checkbox.schema.json'
import propsFieldText from '../packages/fieldText/fieldText.schema.json'

import App from './App.svelte';

console.log('Siva', Siva)
const app = new App({
  target: document.querySelector('#root'),
  props: {
    props: {
      button: propsButton.definitions.attributes.properties,
      checkbox: propsCheckbox.definitions.attributes.properties,
      fieldText: propsFieldText.definitions.attributes.properties,
      icon: propsIcon.definitions.attributes.properties,
      radio: propsRadio.definitions.attributes.properties,
    },
  },
});

export default app;
