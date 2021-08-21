<script lang="ts">
  import { nanoid } from 'nanoid';
import { onDestroy } from 'svelte';
import { identity } from 'svelte/internal';
  import ColorInput from "./ColorInput.svelte";
  import type { IGradientColor } from "./interface";

  // Min 2 values needed to make gradient
  let colors: IGradientColor[] = [
    { id: nanoid(), color: "#ffffff", stop: 50 },
    { id: nanoid(), color: "#000000" },
  ];
  let degree = 0;

  // const intId = setInterval(() => {
  //   console.log(colors);
  // }, 5000);

  // onDestroy(() => {
  //   clearInterval(intId);
  // })

  let gradient = "";
  $: gradient = makeGradient(degree, colors);

  function makeGradient(deg, colors: IGradientColor[]) {
    // linear-gradient(0deg, blue, green 40%, red);
    let colorStrings = colors.map((color) => {
      let colorString = "";
      colorString += color.color;
      if (color.stop) {
        colorString += ` ${color.stop}%`;
      }
      return colorString;
    });
    const colorStringJoined = colorStrings.join(", ");
    const linearGradientCss = `linear-gradient(${deg}deg, ${colorStringJoined})`;
    // console.log('linearGradient', linearGradientCss);
    return linearGradientCss;
  }

  function onClickAddColor() {
    colors = [...colors, { id: nanoid(), color: "#ffffff" }];
  }

  function onClickRemoveColor(colorId: string) {
    if (colors.length <= 2) {
      alert(`Can't have less than 2 colors`);
      return;
    }
    colors = colors.filter((color) => color.id !== colorId);
  }

  function onColorChanged(colorId: string, newColor: string) {
    colors.forEach((color) => {
      if (color.id === colorId) {
        color.color = newColor;
      }
    })
    colors = colors;
  }

  function onStopPositionChanged(colorId: string, newStopPosition: number) {
    colors.forEach((color) => {
      if (color.id === colorId) {
        color.stop = newStopPosition;
      }
    })
    colors = colors;
  }
</script>

<div class="container" style="background-image: {gradient};">
  <div class="config-box">
    {#each colors as color}
      <div class="color-container">
        <ColorInput
          color={color.color}
          stopPosition={color.stop}
          on:colorChanged={(e) => onColorChanged(color.id, e.detail)}
          on:stopChanged={(e) => onStopPositionChanged(color.id, e.detail)}
        />
        <button type="button" on:click={() => onClickRemoveColor(color.id)}> X </button>
      </div>
    {/each}

    <input type="range" min="0" max="360" bind:value={degree} />
    {degree}
    <button type="button" on:click={onClickAddColor}> Add Color </button>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  .config-box {
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    background-color: blanchedalmond;
  }

  .color-container {
    display: flex;
  }
</style>
