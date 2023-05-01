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
    label="Поле с дополнением"
    oninput={onInput}
  >
    <span slot="addon-before">🌝</span>
  </sv-field-text>

  <sv-field-text
    disabled={disabled?.checked || disabled?.default || null}
    name="test"
    value="one"
    label="Простое поле"
    oninput={onInput}
  >
  </sv-field-text>

  <sv-field-text
    disabled={disabled?.checked || disabled?.default || null}
    name="spinbutton"
    label="Spinbutton"
    oninput={onInput}
    type="number"
    min="0"
    max="10"
    style="width:6ch;display:flex;"
  >
  <!-- Добавить тип кнопки spin-down -->
    <sv-button size="s" slot="addon-before">
      <sv-icon name="minus" />
    </sv-button>
    <!-- Добавить тип кнопки spin-up -->
    <sv-button size="s" slot="addon-after">
      <sv-icon name="plus" />
    </sv-button>
  </sv-field-text>
</section>
