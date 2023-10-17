'use client'

import { type BarChartData } from '@/data'
import { ResponsiveBar } from '@nivo/bar'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

type Props = {
  data: BarChartData[]
}

export const BarChart = (props: Props) => {
  const { data } = props

  const { resolvedTheme } = useTheme()

  const fillColor = useMemo(
    () => (resolvedTheme === 'light' ? '#020817' : '#f8fafc'),
    [resolvedTheme]
  )
  const backgroundColor = useMemo(
    () => (resolvedTheme === 'light' ? '#ffffff' : '#020817'),
    [resolvedTheme]
  )

  return (
    <div className="flex h-full w-[85vw]">
      <ResponsiveBar
        theme={{
          axis: {
            domain: {
              line: {
                stroke: fillColor,
              },
            },
            legend: {
              text: {
                fill: fillColor,
              },
            },
            ticks: {
              line: {
                stroke: fillColor,
                strokeWidth: 1,
              },
              text: {
                fill: fillColor,
              },
            },
          },
          legends: {
            text: {
              fill: fillColor,
            },
          },
          tooltip: {
            container: {
              background: backgroundColor,
            },
          },
        }}
        data={data}
        keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: '#38bcb2',
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: '#eed312',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: 'fries',
            },
            id: 'dots',
          },
          {
            match: {
              id: 'sandwich',
            },
            id: 'lines',
          },
        ]}
        borderColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'country',
          legendPosition: 'middle',
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'food',
          legendPosition: 'middle',
          legendOffset: -40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: 'color',
          modifiers: [['darker', 1.6]],
        }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue
        }
      />
    </div>
  )
}
