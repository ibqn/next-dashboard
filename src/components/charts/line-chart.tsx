'use client'

import { type LineChartData } from '@/data'
import { ResponsiveLine } from '@nivo/line'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

type Props = {
  data: LineChartData[]
  onDashboard?: boolean
}

export const LineChart = (props: Props) => {
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
      <ResponsiveLine
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
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'transportation',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'count',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  )
}
