<script lang="ts">
import { createEventDispatcher } from "svelte";


  export let color = 'white';
  export let stopPosition = undefined;

  const dispatch = createEventDispatcher();

  $: dispatch('colorChanged', color);
  $: dispatch('stopChanged', stopPosition);
</script>

<div>
  <input type="color" bind:value={color}>
  <input type="number" bind:value={stopPosition}>
</div>