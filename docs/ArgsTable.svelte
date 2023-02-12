<script>
  import { useLocation } from "svelte-navigator";
  import { updateAttribute } from "./storeAttributes";
  export let props;
  function handleChange(e) {
    updateAttribute(e);
  }
</script>

{#if props == undefined}
  lklk
{/if}
{#each Object.entries(props) as [key, value]}
  <div>
    <div>
      <strong>{key}</strong>
    </div>
    <div>
      {#if value.type === "string" && !value.enum}
        <input
          type="text"
          name={key}
          value={(props[key] && props[key].value) || props[key].default}
          on:change={handleChange}
        />
      {/if}
      {#if value.type === "string" && value.enum}
        <select name={key}>
          {#each value.enum as option}
            <option
              value={option}
              defaultvalue={value.default}
              selected={value.value}
              >{option}
            </option>
          {/each}
        </select>
      {/if}

      {#if value.type === "boolean"}
        <input
          id={`checkbox-${key}`}
          type="checkbox"
          name={key}
          checked={value.checked != null ? value.checked : value.default}
          on:change={handleChange}
        />
      {/if}
    </div>

    {#if value.description}
      <div class="attr-margin">{value.description}</div>
    {/if}

    <div class="attr-margin">
      <em>Тип &nbsp;</em>
      {#if value.type && value.enum}
        <span class="enum-props">
          {#each Object.entries(value.enum) as [key, value]}
            <span class={value.default === value && "default-prop"}>
              {value}
            </span>
          {/each}
        </span>
      {:else}
        <span>{value.type}</span>
      {/if}
    </div>
    {#if !value.enum}
      <div>
        <em>Дефолтное &nbsp;</em>
        <span>{value.default == null ? " - " : value.default}</span>
      </div>
    {/if}
    <hr />
  </div>
{/each}
