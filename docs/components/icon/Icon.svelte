<script>
  import Glyphs from "./Glyphs.svelte";
  export let filled;
  export let size;
  export let ariaHidden;

  $: filled;
  $: size;
</script>

<Glyphs
  filled={filled.checked || filled.default}
  size={size.checked || size.default}
  aria-hidden={ariaHidden.checked || ariaHidden.default}
/>
