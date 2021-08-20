<script lang="ts">
  import type { IGradientColor } from "./interface";

  // Min 2 values needed to make gradient
  let colors: IGradientColor[] = [
    { color: "#ffffff", stop: 50 },
    { color: "#000000" },
  ];
  let degree = 0;

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
    return `linear-gradient(${deg}deg, ${colorStringJoined})`;
  }

  function onClickAddColor() {
    colors = [...colors, { color: "#ffffff" }];
  }
</script>

<div class="container" style="background-image: {gradient};">
  {#each colors as color}
    <input type="color" bind:value={color.color} />
  {/each}

  <input type="range" min="0" max="360" bind:value={degree} />
  {degree}
  <button type="button" on:click={onClickAddColor}> Add Color </button>
</div>

<style>
  .container {
    min-height: 100vh;
  }
</style>
