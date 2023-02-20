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
  >
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Kraken</label>
  </sv-radio>
  <sv-radio
    disabled={disabled?.checked || disabled.default || null}
    name="test"
    value="two"
    oninput={onInput}
  >
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label>Sasquatch</label>
  </sv-radio>
</section>
