export const initArgsTable = (updateAttribute) => {
  const attributes = document.querySelector('#attributes')
  const fields = attributes?.querySelectorAll('[name]') || [];
  let index = 0;

  for (index = 0; index < fields.length; ++index) {
    const textField = fields[index];
    textField.addEventListener('change', onChangeHandler);
  }

  function onChangeHandler(e) {
    updateAttribute(e)
  }
}
