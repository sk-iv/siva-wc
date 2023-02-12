import {
  // eslint-disable-next-line no-unused-vars
  Button, Radio, FieldText, Icon,
} from '../packages'
import propsIcon from '../packages/icon/icon.schema.json'
import propsButton from '../packages/button/button.schema.json'
import propsRadio from '../packages/radio/radio.schema.json'
import propsFieldText from '../packages/fieldText/fieldText.schema.json'

import App from './App.svelte';

const app = new App({
  target: document.querySelector('#root'),
  props: {
    props: {
      icon: propsIcon.definitions.attributes.properties,
      button: propsButton.definitions.attributes.properties,
      radio: propsRadio.definitions.attributes.properties,
      fieldText: propsFieldText.definitions.attributes.properties,
    },
  },
});

export default app;
