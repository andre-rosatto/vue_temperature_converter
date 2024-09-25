<script setup lang="ts">
import Temperature, { type TemperatureScales } from './components/Temperature.vue';

import { ref } from 'vue';

const temperature = ref(0);

const handleInput = (input: HTMLInputElement, scale: TemperatureScales) => {
	const value = input.valueAsNumber || 0;
	switch (scale) {
		case 'f':
			temperature.value = 5 / 9 * (value - 32);
			break;
		case 'k':
			temperature.value = value - 273.15;
			break;
		case 'r':
			temperature.value = (value - 491.67) * 5 / 9;
			break;
		default:
			temperature.value = value;
	}
}
</script>

<template>
  <main>
		<h1 class="text-center text-4xl text-gray-200 font-bold my-10">Temperature Converter</h1>
		<section class="m-auto flex flex-col max-w-56 md:flex-row gap-4 justify-center">
			<Temperature :temperature="temperature" scale="c" @input="handleInput($event.target, 'c')" />
			<Temperature :temperature="temperature" scale="f" @input="handleInput($event.target, 'f')" />
			<Temperature :temperature="temperature" scale="k" @input="handleInput($event.target, 'k')" />
			<Temperature :temperature="temperature" scale="r" @input="handleInput($event.target, 'r')" />
		</section>
	</main>
</template>
