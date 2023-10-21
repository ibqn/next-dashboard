'use client'

import { type PieChartData } from '@/data'
import { ResponsivePie } from '@nivo/pie'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

type Props = {
  data: PieChartData[]
  onDashboard?: boolean
}

export const PieChart = (props: Props) => {
  const { data, onDashboard = false } = props

  const { resolvedTheme } = useTheme()

  const fillColor = useMemo(
    () => (resolvedTheme === 'light' ? '#020817' : '#f8fafc'),
    [resolvedTheme]
  )
  const backgroundColor = useMemo(
    () => (resolvedTheme === 'light' ? '#ffffff' : '#020817'),
    [resolvedTheme]
  )
  const textColor = useMemo(
    () => (resolvedTheme === 'light' ? '#020817' : '#ffffff'),
    [resolvedTheme]
  )

  return (
    <div className="flex h-full w-[85vw]">
      <ResponsivePie
        theme={{
          labels: {
            text: {
              color: textColor,
            },
          },
          axis: {
            domain: {
              line: {
                stroke: fillColor,
              },
            },
          },
          tooltip: {
            container: {
              background: backgroundColor,
            },
          },
        }}
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        colors={{ scheme: 'nivo' }}
        borderWidth={1}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={{ theme: 'labels.text.color' }}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: 'color',
          modifiers: [['darker', 2]],
        }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'ruby',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'c',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'go',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'python',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'scala',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'lisp',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'elixir',
            },
            id: 'lines',
          },
          {
            match: {
              id: 'javascript',
            },
            id: 'lines',
          },
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}
