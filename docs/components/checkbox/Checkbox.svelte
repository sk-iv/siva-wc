<script>
  export let disabled;
  const onInput = (e) => {
    console.log("radio value:", e.target.value);
  };
  $: disabled;
</script>

<section>
  <p>
    Переключатели позволяют пользователям выбрать несколько опций из набора.
  </p>
  <div>
    <sv-checkbox
      disabled={disabled?.checked || disabled.default || null}
      name="test"
      value="one"
      checked={true}
      oninput={onInput}
    >
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <label slot="label">Kraken</label>
    </sv-checkbox>
  </div>
  <div>
    <sv-checkbox
    disabled={disabled?.checked || disabled.default || null}
    name="test"
    value="two"
    oninput={onInput}
  >
    <!-- svelte-ignore a11y-label-has-associated-control -->
    <label slot="label">Sasquatch</label>
  </sv-checkbox>
  </div>
  
</section>
