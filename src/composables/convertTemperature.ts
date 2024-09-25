import type { TemperatureScales } from "@/typings/temperature"

const convertTemperature = (value: number, from: TemperatureScales, to: TemperatureScales): number => {
	if (from === to) return value;
	if (to === 'c') {
		switch (from) {
			case 'f':
				return 5 / 9 * (value - 32);
			case 'k':
				return value - 273.15;
			case 'r':
				return (value - 491.67) * 5 / 9
			default:
				return value;
		}
	} else if (from === 'c') {
		switch (to) {
			case 'f':
				return value * 1.8 + 32;
			case 'k':
				return value + 273.15;
			case 'r':
				return value * 1.8 + 491.67;
			default:
				return value;
		}
	} else {
		return convertTemperature(convertTemperature(value, from, 'c'), 'c', to);
	}
}

export default convertTemperature;