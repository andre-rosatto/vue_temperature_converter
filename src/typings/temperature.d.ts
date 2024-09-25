export type TemperatureScales = 'c' | 'f' | 'k' | 'r';
export interface ITemperatureProps {
	temperature: number,
	scale: TemperatureScales
}