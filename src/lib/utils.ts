const KELVIN_FACTOR = 273.15;
export function kelvinToCelsius(kelvin: number): number {
  return Math.round((kelvin - KELVIN_FACTOR) * 10) / 10;
}

export function roundToOneDecimal(value: number): number {
  return Math.round(value * 10) / 10;
}

export function metersToKilometers(meters: number): number {
  const output: number = meters / 1000;
  return output;
}
export function estimateUVIndexFromTime(timestamp: number): number {
  // Assumption: UV peaks at solar noon and is roughly parabolic during the day
  const date = new Date(timestamp * 1000);
  const hours = date.getUTCHours() + date.getUTCMinutes() / 60;

  // Assume solar noon at 12:00 local time (UTC+5.5 for India)
  const localTime = hours + 5.5;
  const timeFromNoon = Math.abs(12 - localTime);

  // Max UV at noon on a clear day ~11 for Indian summer (can adjust seasonally)
  const maxUV = 11;

  // UV drops roughly in a parabolic curve from noon
  const estimatedUV = Math.max(0, maxUV * (1 - Math.pow(timeFromNoon / 6, 2)));

  return Math.round(estimatedUV * 10) / 10; // round to 1 decimal
}
