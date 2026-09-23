// Figures Jon confirmed in chat are hard numbers.
// Anything only he can supply is left as a bracketed blank on purpose:
// a plausible fake number on an investor page is worse than a visible gap.

export const company = {
  name: 'Racct',
  tagline: 'Autonomous pickup, powered by every ticket it runs.',
  subhead:
    'Consumers scan what they no longer want. Racct sells what has resale value, hauls the rest, and turns each pickup into training data for fully autonomous dispatch.',
  raiseHeadline: '$2M seed',
  updated: 'September 2026',
};

export type Metric = {
  value: string;
  label: string;
  note?: string;
  blank?: boolean;
};

export const metrics: Metric[] = [
  { value: '3,000', label: 'Users', note: 'Consumer side, organic-heavy' },
  { value: '$3.5K', label: 'Monthly revenue', note: '~$42K run-rate, growing' },
  { value: '[MoM %]', label: 'Month-over-month growth', blank: true },
  { value: '[GMV]', label: 'Resale GMV run-rate', blank: true },
  { value: '[repeat %]', label: 'Repeat customers', blank: true },
  { value: '[margin]', label: 'Contribution margin per pickup', blank: true },
];

export const marketplace = [
  {
    side: 'Demand',
    title: 'Scan and sell, in one pass',
    body:
      'A household opens the app, scans what it wants gone, and gets a single decision back: this sells, this does not, we take both. One pickup clears the room. That is the wedge consumers actually pay for, and it is why acquisition has stayed cheap.',
    points: [
      'Conversational scan-and-sell flow, no listing work for the customer',
      'One booking covers resale items and haul-away together',
      'Live tracking on every pickup, already shipped',
    ],
  },
  {
    side: 'Supply',
    title: 'We do not wait for buyers to show up',
    body:
      'The usual resale marketplace dies waiting for liquidity on one side. Racct sidesteps it two ways: outside lead funnels bring supply in without paid acquisition, and inventory is crossposted onto marketplaces that already have the buyers.',
    points: [
      'Outside lead funneling for a steady supply pipeline',
      'Automated crossposting onto external marketplaces for instant demand',
      'No cold-start problem: buyers are borrowed, not built',
    ],
  },
];

export const howItWorks = [
  {
    step: '01',
    title: 'Scan',
    body: 'The customer walks the room with their phone. Racct identifies each item and prices what is sellable.',
  },
  {
    step: '02',
    title: 'Sell',
    body: 'Sellable inventory is crossposted to marketplaces with existing buyer demand. The customer never writes a listing.',
  },
  {
    step: '03',
    title: 'Pickup',
    body: 'One dispatched pickup clears everything. Tracking, comms and routing run through Racct.',
  },
  {
    step: '04',
    title: 'Learn',
    body: 'Every ticket, exception and customer message becomes training data. Humans stay on the edge cases; the middle gets automated.',
  },
];

export const raise = {
  target: '$2M',
  stage: '[round stage: pre-seed / seed]',
  status: '[where it stands: soft circles, lead, terms]',
  angelFollowOn:
    'Potential follow-on from the lead angel already on the cap table.',
  conversations: '5 funds in active conversation, with more calls booked',
  useOfFunds: [
    '[use of funds line 1]',
    '[use of funds line 2]',
    '[use of funds line 3]',
  ],
};

export const backers = [
  {
    name: 'Iqram Magdon-Ismail',
    role: 'Investor, on the cap table',
    note:
      'Co-founder of Venmo. A proven founder, operator and investor, and the kind of consumer-payments pattern match that reads on this business.',
  },
];

export const momentum = [
  {
    label: 'Investor conversations',
    value: '5 funds live',
    detail: 'Additional VC calls being scheduled now.',
  },
  {
    label: 'Events',
    value: 'Booked through mid-October',
    detail: 'Demand-side and operator events driving supply and signups.',
  },
  {
    label: 'Product',
    value: 'Auto tracking shipped',
    detail: 'Dispatch, comms and tracking are the automation wedge.',
  },
];

export const contact = {
  name: 'Jon Merril',
  email: '[your email]',
  deck: '[deck link]',
  site: 'softlanding.nyc',
};
