export interface jobConfig {
  maxChange: number,
  parentInterval: number,
  childInterval: number,
  minRsi: number,
  maxRsi: number,
  candlesCount: number,
  minDip: number,
  minLastGreenCount: number,
  requirePositiveBullRun: boolean,
  bullRunMultiplier: number,
  lQueryMinScore: number,
}
