<script>
  const { glyphs, glyphsRich } = require("../../../packages/icon");
  export let filled;
  export let size;
  export let ariaHidden;

  $: filled;
  $: size;
</script>

{#each Object.entries({ ...glyphs, ...glyphsRich }) as [key, value]}
  <sv-icon name={key || undefined} {size} {filled} aria-hidden={ariaHidden} />
{/each}
