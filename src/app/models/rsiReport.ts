export interface rsiReport {
  currentInInterval: boolean,
  lowestComesAfterHighest: boolean,
  lowestIsNotNewest: boolean,
  peakHigherThanNewest: boolean,
  currentValue: number,
  eligible: boolean,
}
