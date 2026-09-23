// Monthly revenue, as Jon reported it in chat. Nothing modelled, nothing smoothed.
// September is the month in progress at time of writing.

export type MonthRow = {
  month: string;
  short: string;
  value: number;
  partial?: boolean;
  marker?: string;
};

export const monthlyRevenue: MonthRow[] = [
  { month: 'March 2026', short: 'Mar', value: 392 },
  { month: 'April 2026', short: 'Apr', value: 73 },
  { month: 'May 2026', short: 'May', value: 490 },
  { month: 'June 2026', short: 'Jun', value: 689 },
  { month: 'July 2026', short: 'Jul', value: 493 },
  { month: 'August 2026', short: 'Aug', value: 2854, marker: 'Removals relaunched' },
  { month: 'September 2026', short: 'Sep', value: 3500, partial: true },
];

export const revenueMax = Math.max(...monthlyRevenue.map((m) => m.value));

export const revenueFacts = [
  {
    value: '5.8x',
    label: 'July to August',
    detail: '$493 to $2,854 the month removals came back online.',
  },
  {
    value: '+23%',
    label: 'August to September',
    detail: 'Second consecutive month above trend, with September still running.',
  },
  {
    value: '75%',
    label: 'Of 2026 revenue in the last two months',
    detail: '$6,354 of $8,491 booked since the relaunch.',
  },
];

export const revenueHonesty =
  'Two months of post-relaunch data, not a six-month compounding curve. March through July averaged $427/mo with removals switched off; the step change is the removals line coming back, and October is the month that turns a step into a trend.';
