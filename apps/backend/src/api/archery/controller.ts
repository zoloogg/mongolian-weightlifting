import { Request, Response } from 'express'

export const archeryController = {
  getMatch: async (req: Request, res: Response) => {
    res.json([
      {
        name: 'Б. Балданбаатар',
        arrow1: 10,
        arrow2: 9,
        arrow3: 8,
        arrow4: 7,
        arrow5: 6,
        arrow6: 5,
        total: 45,
        set: 1,
      },
      {
        name: 'Б. Бадамсэрэжид',
        arrow1: 5,
        arrow2: 6,
        arrow3: 7,
        arrow4: 8,
        arrow5: 9,
        arrow6: 10,
        total: 45,
        set: 2,
      },
    ])
  },
  getBracket: async (req: Request, res: Response) => {
    res.json([
      {
        round: '1/4',
        first: 'Б. Балданбаатар',
        scoreFirst: 45,
        second: 'Б. Бадамсэрэжид',
        scoreSecond: 45,
        third: 'Б. Батбаяр',
        scoreThird: 45,
        fourth: 'Б. Батбаяр',
        scoreFourth: 45,
        fifth: 'Б. Батбаяр',
        scoreFifth: 45,
        sixth: 'Б. Батбаяр',
        scoreSixth: 45,
        seventh: 'Б. Батбаяр',
        scoreSeventh: 45,
        eighth: 'Б. Батбаяр',
        scoreEighth: 45,
      },
      {
        round: '1/2',
        first: 'Б. Батбаяр',
        scoreFirst: 45,
        second: 'Б. Батбаяр',
        scoreSecond: 45,
        third: 'Б. Батбаяр',
        scoreThird: 45,
        fourth: 'Б. Батбаяр',
        scoreFourth: 45,
      },
      {
        round: 'final',
        first: 'Б. Батбаяр',
        scoreFirst: 45,
        second: 'Б. Батбаяр',
        scoreSecond: 45,
        third: 'Б. Батбаяр',
        scoreThird: 45,
        fourth: 'Б. Батбаяр',
        scoreFourth: 45,
      },
    ])
  },
}
