<script>
  export let disabled;
  const onInput = (e) => {
    console.log("fieldText value:", e.target.value);
  };
  $: disabled;
</script>

<section>
  <p>
    Компонент-оболочка представляет собой элемент управления формы, включающий
    метку, ввод и текст справки.
  </p>
  <p>
    🔗
    <a
      href="https://guides.kontur.ru/principles/validation/#Validatsiya_zavisimih_polei"
      >Валидация</a
    >
  </p>
  <sv-field-text
    disabled={disabled?.checked || disabled?.default || null}
    name="test"
    value="one"
    label="Главный герой"
    oninput={onInput}
  >
    <span slot="addon-before">🌝</span>
  </sv-field-text>
</section>
