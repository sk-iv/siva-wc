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
    id="control1"
  >
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label slot="label">Kraken</label>
  </sv-radio>
  <sv-radio
    disabled={disabled?.checked || disabled.default || null}
    name="test"
    value="two"
    oninput={onInput}
  >
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label slot="label">Sasquatch</label>
  </sv-radio>
</section>
