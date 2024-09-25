<script setup lang="ts">
import convertTemperature from '@/composables/convertTemperature';
import type { ITemperatureProps } from '@/typings/temperature';

defineProps<ITemperatureProps>();

const fixedValue = (value: number) => {
	return parseFloat(value.toFixed(2));
}
</script>

<template>
	<div class="bg-gray-200 p-4 rounded-md shadow-md shadow-gray-500">
		<!-- heading -->
		<h2 class="text-2xl font-bold text-center mb-2" v-if="scale.toLowerCase() === 'f'">Fahrenheit</h2>
		<h2 class="text-2xl font-bold text-center mb-2" v-else-if="scale.toLowerCase() === 'k'">Kelvin</h2>
		<h2 class="text-2xl font-bold text-center mb-2" v-else-if="scale.toLowerCase() === 'r'">Rankine</h2>
		<h2 class="text-2xl font-bold text-center mb-2" v-else>Celsius</h2>
		<!-- input -->
		<div class="flex gap-2 justify-center">
			<input class="rounded border border-gray-500 px-2 w-28" type="number" :value="fixedValue(convertTemperature(temperature, 'c', scale))">
			<span v-if="scale.toLowerCase() === 'f'">°F</span>
			<span v-else-if="scale.toLowerCase() === 'k'">K</span>
			<span v-else-if="scale.toLowerCase() === 'r'">°R</span>
			<span v-else>°C</span>
	</div>
	</div>
</template>