import { mainJobStatus } from "./mainJobStatus";
import { profitStatus } from "./profitStatus";
import { jobConfig } from "./jobConfig";

export interface currentStatus {
  mainJobStatus: mainJobStatus,
  profitStatus: profitStatus,
  jobConfig: jobConfig,
}
