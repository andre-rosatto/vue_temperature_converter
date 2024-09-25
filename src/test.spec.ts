import { test, expect, describe } from 'vitest';
import convertTemperature from './composables/convertTemperature';

describe('composables test: convertTemperatures', () => {
	// converting to °C
	test('0°C to °C', () => {
		expect(convertTemperature(0, 'c', 'c')).toBeCloseTo(0, 2);
	});
	test('100°C to °C', () => {
		expect(convertTemperature(100, 'c', 'c')).toBeCloseTo(100, 2);
	});
	test('0°F to °C', () => {
		expect(convertTemperature(0, 'f', 'c')).toBeCloseTo(-17.78, 2);
	});
	test('100°F to °C', () => {
		expect(convertTemperature(100, 'f', 'c')).toBeCloseTo(37.78, 2);
	});
	test('0K to °C', () => {
		expect(convertTemperature(0, 'k', 'c')).toBeCloseTo(-273.15, 2);
	});
	test('100K to °C', () => {
		expect(convertTemperature(100, 'k', 'c')).toBeCloseTo(-173.15, 2);
	});
	test('0°R to °C', () => {
		expect(convertTemperature(0, 'r', 'c')).toBeCloseTo(-273.15, 2);
	});
	test('100°R to °C', () => {
		expect(convertTemperature(100, 'r', 'c')).toBeCloseTo(-217.59, 2);
	});

	// converting to °F
	test('0°F to °F', () => {
		expect(convertTemperature(0, 'f', 'f')).toBeCloseTo(0, 2);
	});
	test('100°F to °F', () => {
		expect(convertTemperature(100, 'f', 'f')).toBeCloseTo(100, 2);
	});
	test('0°C to °F', () => {
		expect(convertTemperature(0, 'c', 'f')).toBeCloseTo(32, 2);
	});
	test('100°C to °F', () => {
		expect(convertTemperature(100, 'c', 'f')).toBeCloseTo(212, 2);
	});
	test('0K to °F', () => {
		expect(convertTemperature(0, 'k', 'f')).toBeCloseTo(-459.67, 2);
	});
	test('100K to °F', () => {
		expect(convertTemperature(100, 'k', 'f')).toBeCloseTo(-279.67, 2);
	});
	test('0°R to °F', () => {
		expect(convertTemperature(0, 'r', 'f')).toBeCloseTo(-459.67, 2);
	});
	test('100°R to °F', () => {
		expect(convertTemperature(100, 'r', 'f')).toBeCloseTo(-359.67, 2);
	});

	// converting to K
	test('0K to K', () => {
		expect(convertTemperature(0, 'k', 'k')).toBeCloseTo(0, 2);
	});
	test('100K to K', () => {
		expect(convertTemperature(100, 'k', 'k')).toBeCloseTo(100, 2);
	});
	test('0°C to K', () => {
		expect(convertTemperature(0, 'c', 'k')).toBeCloseTo(273.15, 2);
	});
	test('100°C to K', () => {
		expect(convertTemperature(100, 'c', 'k')).toBeCloseTo(373.15, 2);
	});
	test('0°F to K', () => {
		expect(convertTemperature(0, 'f', 'k')).toBeCloseTo(255.37, 2);
	});
	test('100°F to K', () => {
		expect(convertTemperature(100, 'f', 'k')).toBeCloseTo(310.93, 2);
	});
	test('0°R to K', () => {
		expect(convertTemperature(0, 'r', 'k')).toBeCloseTo(0, 2);
	});
	test('100°R to K', () => {
		expect(convertTemperature(100, 'r', 'k')).toBeCloseTo(55.56, 2);
	});
	
	// converting to °R
	test('0°R to °R', () => {
		expect(convertTemperature(0, 'r', 'r')).toBeCloseTo(0, 2);
	});
	test('100°R to °R', () => {
		expect(convertTemperature(100, 'r', 'r')).toBeCloseTo(100, 2);
	});
	test('0°C to °R', () => {
		expect(convertTemperature(0, 'c', 'r')).toBeCloseTo(491.67, 2);
	});
	test('100°C to °R', () => {
		expect(convertTemperature(100, 'c', 'r')).toBeCloseTo(671.67, 2);
	});
	test('0°F to °R', () => {
		expect(convertTemperature(0, 'f', 'r')).toBeCloseTo(459.67, 2);
	});
	test('100°F to °R', () => {
		expect(convertTemperature(100, 'f', 'r')).toBeCloseTo(559.67, 2);
	});
	test('0K to °R', () => {
		expect(convertTemperature(0, 'k', 'r')).toBeCloseTo(0, 2);
	});
	test('100K to °R', () => {
		expect(convertTemperature(100, 'k', 'r')).toBeCloseTo(180, 2);
	});
});