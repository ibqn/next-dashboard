export type LineChartData = {
  id: string
  color: string
  data: {
    x: string
    y: number
  }[]
}

export const lineChartData: LineChartData[] = [
  {
    id: 'japan',
    color: 'hsl(310, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 64,
      },
      {
        x: 'helicopter',
        y: 78,
      },
      {
        x: 'boat',
        y: 213,
      },
      {
        x: 'train',
        y: 255,
      },
      {
        x: 'subway',
        y: 164,
      },
      {
        x: 'bus',
        y: 150,
      },
      {
        x: 'car',
        y: 247,
      },
      {
        x: 'moto',
        y: 260,
      },
      {
        x: 'bicycle',
        y: 183,
      },
      {
        x: 'horse',
        y: 207,
      },
      {
        x: 'skateboard',
        y: 243,
      },
      {
        x: 'others',
        y: 255,
      },
    ],
  },
  {
    id: 'france',
    color: 'hsl(84, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 123,
      },
      {
        x: 'helicopter',
        y: 266,
      },
      {
        x: 'boat',
        y: 153,
      },
      {
        x: 'train',
        y: 251,
      },
      {
        x: 'subway',
        y: 22,
      },
      {
        x: 'bus',
        y: 128,
      },
      {
        x: 'car',
        y: 55,
      },
      {
        x: 'moto',
        y: 113,
      },
      {
        x: 'bicycle',
        y: 81,
      },
      {
        x: 'horse',
        y: 299,
      },
      {
        x: 'skateboard',
        y: 233,
      },
      {
        x: 'others',
        y: 150,
      },
    ],
  },
  {
    id: 'us',
    color: 'hsl(33, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 286,
      },
      {
        x: 'helicopter',
        y: 229,
      },
      {
        x: 'boat',
        y: 52,
      },
      {
        x: 'train',
        y: 183,
      },
      {
        x: 'subway',
        y: 193,
      },
      {
        x: 'bus',
        y: 299,
      },
      {
        x: 'car',
        y: 29,
      },
      {
        x: 'moto',
        y: 132,
      },
      {
        x: 'bicycle',
        y: 290,
      },
      {
        x: 'horse',
        y: 97,
      },
      {
        x: 'skateboard',
        y: 159,
      },
      {
        x: 'others',
        y: 121,
      },
    ],
  },
  {
    id: 'germany',
    color: 'hsl(354, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 135,
      },
      {
        x: 'helicopter',
        y: 111,
      },
      {
        x: 'boat',
        y: 11,
      },
      {
        x: 'train',
        y: 68,
      },
      {
        x: 'subway',
        y: 3,
      },
      {
        x: 'bus',
        y: 130,
      },
      {
        x: 'car',
        y: 170,
      },
      {
        x: 'moto',
        y: 172,
      },
      {
        x: 'bicycle',
        y: 138,
      },
      {
        x: 'horse',
        y: 247,
      },
      {
        x: 'skateboard',
        y: 90,
      },
      {
        x: 'others',
        y: 33,
      },
    ],
  },
  {
    id: 'norway',
    color: 'hsl(359, 70%, 50%)',
    data: [
      {
        x: 'plane',
        y: 244,
      },
      {
        x: 'helicopter',
        y: 74,
      },
      {
        x: 'boat',
        y: 237,
      },
      {
        x: 'train',
        y: 212,
      },
      {
        x: 'subway',
        y: 212,
      },
      {
        x: 'bus',
        y: 79,
      },
      {
        x: 'car',
        y: 231,
      },
      {
        x: 'moto',
        y: 187,
      },
      {
        x: 'bicycle',
        y: 289,
      },
      {
        x: 'horse',
        y: 223,
      },
      {
        x: 'skateboard',
        y: 248,
      },
      {
        x: 'others',
        y: 291,
      },
    ],
  },
]
