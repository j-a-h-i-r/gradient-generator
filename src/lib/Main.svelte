<script lang="ts">
  import { nanoid } from "nanoid";
  import ColorInput from "./ColorInput.svelte";
  import type { IGradientColor } from "./interface";

  // Min 2 values needed to make gradient
  let colors: IGradientColor[] = [
    { id: nanoid(), color: "#ffffff" },
    { id: nanoid(), color: "#000000", stop: 50 },
  ];
  let gradientDegree = 0;
  let degree = 0;

  // const intId = setInterval(() => {
  //   console.log(colors);
  // }, 5000);

  // onDestroy(() => {
  //   clearInterval(intId);
  // })

  let gradient = "";
  $: gradient = makeGradient(gradientDegree, colors);

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
    });
    colors = colors;
  }

  function onStopPositionChanged(colorId: string, newStopPosition: number) {
    colors.forEach((color) => {
      if (color.id === colorId) {
        color.stop = newStopPosition;
      }
    });
    colors = colors;
  }
</script>


<div class="container" style="background-image: {gradient};">
  <div class="config-box">

    <div class="mb-4">
      <p class="text-gray-700"> Press h to hide this box. Press h to unhide again </p>
    </div>

    <div class="flex">
      <input class="flex-1" type="range" min="0" max="360" name="degree" bind:value={gradientDegree} /> 
      <label class="bg-blue-400 font-bold ml-2 px-3 rounded-full text-white" for="degree">{gradientDegree}</label>
    </div>

    {#each colors as color}
      <div class="flex py-1">
        <ColorInput
          color={color.color}
          stopPosition={color.stop}
          on:colorChanged={(e) => onColorChanged(color.id, e.detail)}
          on:stopChanged={(e) => onStopPositionChanged(color.id, e.detail)}
        />
        <button type="button" class="ml-2 bg-pink-500 rounded px-2 shadow text-white font-bold" on:click={() => onClickRemoveColor(color.id)}>
          &times;
        </button>
      </div>
    {/each}

    <button type="button" class="px-2 shadow bg-blue-500 rounded text-white mt-2 py-1" on:click={onClickAddColor}> Add Color </button>
  </div>
</div>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    min-width: 100vw;
  }
</style>
