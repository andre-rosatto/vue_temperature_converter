<script setup lang="ts">
import Temperature from './components/Temperature.vue';
import convertTemperature from './composables/convertTemperature';
import type { TemperatureScales } from './typings/temperature';
import { ref } from 'vue';

const temperature = ref(0);

const handleInput = (input: HTMLInputElement, scale: TemperatureScales) => {
	const value = input.valueAsNumber || 0;
	temperature.value = convertTemperature(value, scale, 'c');
}
</script>

<template>
  <main>
		<h1 class="text-center text-4xl text-gray-200 font-bold my-10">Temperature Converter</h1>
		<section class="m-auto flex flex-col max-w-56 md:flex-row gap-4 justify-center">
			<Temperature v-for="scale in <Array<TemperatureScales>>['c', 'f', 'k', 'r'] " :temperature="temperature" :scale="scale" @input="handleInput($event.target, scale)" />
		</section>
	</main>
</template>
