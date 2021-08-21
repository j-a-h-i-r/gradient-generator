<script lang="ts">
import { createEventDispatcher } from "svelte";


  export let color = 'white';
  export let stopPosition = undefined;

  const dispatch = createEventDispatcher();

  $: dispatch('colorChanged', color);
  $: dispatch('stopChanged', stopPosition);
</script>

<div>
  <input type="color" bind:value={color} class="rounded mr-2">
  <input type="number" bind:value={stopPosition} class="rounded px-2">
</div>