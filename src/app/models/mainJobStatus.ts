import { age } from "./age";
import { rsiReport } from "./rsiReport";

export interface mainJobStatus {
  busy: boolean,
  currentChange: number,
  age: age,
  parentMinRsi: number,
  parentMaxRsi: number,
  childMinRsi: number,
  childMaxRsi: number,
  lastExecution: Date,
  parentReport: rsiReport,
  childReport: rsiReport,
  parentNotifierActivated: boolean,
  childNotifierActivated: boolean,
}
