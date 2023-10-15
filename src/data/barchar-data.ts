import { Prettify } from '@/types'

export type BarChartKey =
  | 'hot dog'
  | 'burger'
  | 'sandwich'
  | 'kebab'
  | 'donut'
  | 'fries'

export type BarChartColor = `${BarChartKey}Color`

export type BarChartData = Prettify<
  { country: string } & Record<BarChartKey, number> &
    Record<BarChartColor, string>
>

export const barChartData: BarChartData[] = [
  {
    country: 'AD',
    'hot dog': 156,
    'hot dogColor': 'hsl(161, 70%, 50%)',
    burger: 22,
    burgerColor: 'hsl(225, 70%, 50%)',
    sandwich: 198,
    sandwichColor: 'hsl(89, 70%, 50%)',
    kebab: 45,
    kebabColor: 'hsl(285, 70%, 50%)',
    fries: 58,
    friesColor: 'hsl(190, 70%, 50%)',
    donut: 80,
    donutColor: 'hsl(168, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 174,
    'hot dogColor': 'hsl(124, 70%, 50%)',
    burger: 110,
    burgerColor: 'hsl(231, 70%, 50%)',
    sandwich: 108,
    sandwichColor: 'hsl(290, 70%, 50%)',
    kebab: 40,
    kebabColor: 'hsl(310, 70%, 50%)',
    fries: 43,
    friesColor: 'hsl(202, 70%, 50%)',
    donut: 97,
    donutColor: 'hsl(140, 70%, 50%)',
  },
  {
    country: 'AF',
    'hot dog': 94,
    'hot dogColor': 'hsl(345, 70%, 50%)',
    burger: 71,
    burgerColor: 'hsl(336, 70%, 50%)',
    sandwich: 20,
    sandwichColor: 'hsl(21, 70%, 50%)',
    kebab: 126,
    kebabColor: 'hsl(217, 70%, 50%)',
    fries: 144,
    friesColor: 'hsl(111, 70%, 50%)',
    donut: 11,
    donutColor: 'hsl(258, 70%, 50%)',
  },
  {
    country: 'AG',
    'hot dog': 4,
    'hot dogColor': 'hsl(186, 70%, 50%)',
    burger: 73,
    burgerColor: 'hsl(174, 70%, 50%)',
    sandwich: 146,
    sandwichColor: 'hsl(123, 70%, 50%)',
    kebab: 108,
    kebabColor: 'hsl(149, 70%, 50%)',
    fries: 13,
    friesColor: 'hsl(287, 70%, 50%)',
    donut: 182,
    donutColor: 'hsl(81, 70%, 50%)',
  },
  {
    country: 'AI',
    'hot dog': 103,
    'hot dogColor': 'hsl(120, 70%, 50%)',
    burger: 116,
    burgerColor: 'hsl(87, 70%, 50%)',
    sandwich: 170,
    sandwichColor: 'hsl(31, 70%, 50%)',
    kebab: 110,
    kebabColor: 'hsl(334, 70%, 50%)',
    fries: 76,
    friesColor: 'hsl(59, 70%, 50%)',
    donut: 58,
    donutColor: 'hsl(135, 70%, 50%)',
  },
  {
    country: 'AL',
    'hot dog': 190,
    'hot dogColor': 'hsl(312, 70%, 50%)',
    burger: 7,
    burgerColor: 'hsl(196, 70%, 50%)',
    sandwich: 99,
    sandwichColor: 'hsl(310, 70%, 50%)',
    kebab: 40,
    kebabColor: 'hsl(171, 70%, 50%)',
    fries: 0,
    friesColor: 'hsl(0, 70%, 50%)',
    donut: 175,
    donutColor: 'hsl(142, 70%, 50%)',
  },
  {
    country: 'AM',
    'hot dog': 166,
    'hot dogColor': 'hsl(185, 70%, 50%)',
    burger: 76,
    burgerColor: 'hsl(331, 70%, 50%)',
    sandwich: 1,
    sandwichColor: 'hsl(59, 70%, 50%)',
    kebab: 29,
    kebabColor: 'hsl(190, 70%, 50%)',
    fries: 178,
    friesColor: 'hsl(208, 70%, 50%)',
    donut: 81,
    donutColor: 'hsl(169, 70%, 50%)',
  },
]
