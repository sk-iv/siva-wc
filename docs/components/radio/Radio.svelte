<script>
  export let disabled;
  const onInput = (e) => {
    console.log("radio value:", e.target.value);
  };
  $: disabled;
</script>

<section>
  <p>
    Переключатели позволяют пользователям делать один выбор из набора опций.
  </p>
  <sv-radio
    disabled={disabled?.checked || disabled.default || null}
    name="test"
    value="one"
    checked={true}
    oninput={onInput}
  />
  <sv-radio
    disabled={disabled?.checked || disabled.default || null}
    name="test"
    value="two"
    oninput={onInput}
  />
</section>
