export class SummaryStepsRaw implements IInfo {
  amount: number;
  period: number;
  payday: number;
  salary: number;
  name: string;
  surname: string;
  id: string;
  phone: number;
  info: string;
  education: number;
  jobField: number;
  jobPeriod: number;
  jobPosition: number;
}

export class SummaryStepsInfo implements IInfo {
  amount: number;
  period: number;
  payday: number;
  salary: number;
  name: string;
  surname: string;
  id: string;
  phone: number;
  info: string;
  education: string;
  jobField: string;
  jobPeriod: string;
  jobPosition: string;
}

export class IInfo {
  amount: number;
  period: number;
  payday: number;
  salary: number;
  name: string;
  surname: string;
  id: string;
  phone: number;
  info: string;
}
