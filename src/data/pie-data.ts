export type PieChartData = {
  id: string
  label: string
  value: number
  color: string
}

export const pieChartData: PieChartData[] = [
  {
    id: 'ruby',
    label: 'ruby',
    value: 365,
    color: 'hsl(195, 70%, 50%)',
  },
  {
    id: 'javascript',
    label: 'javascript',
    value: 539,
    color: 'hsl(212, 70%, 50%)',
  },
  {
    id: 'elixir',
    label: 'elixir',
    value: 292,
    color: 'hsl(121, 70%, 50%)',
  },
  {
    id: 'sass',
    label: 'sass',
    value: 298,
    color: 'hsl(151, 70%, 50%)',
  },
  {
    id: 'php',
    label: 'php',
    value: 555,
    color: 'hsl(344, 70%, 50%)',
  },
]
