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
        first: 'AAAAAAAAAAAAAAAA',
        second: 'BBBBBBBBBBBBBBBB',
        third: 'CCCCCCCCCCCCCCCC',
      },
      {
        first: 'DDDDDDDDDDDDDDDD',
        second: 'EEEEEEEEEEEEEEEE',
        third: 'FFFFFFFFFFFFFFFF',
      },
      {
        first: 'GGGGGGGGGGGGGGGG',
        second: 'HHHHHHHHHHHHHHHH',
        third: 'IIIIIIIIIIIIIIII',
      },
      {
        first: 'KKKKKKKKKKKKKKKK',
        second: 'LLLLLLLLLLLLLLLL',
        third: 'MMMMMMMMMMMMMMMM',
      },
      {
        first: 'NNNNNNNNNNNNNNNN',
        second: 'OOOOOOOOOOOOOOOO',
      },
      {
        first: 'QQQQQQQQQQQQQQQQ',
        second: 'RRRRRRRRRRRRRRRR',
      },
      {
        first: 'TTTTTTTTTTTTTTTT',
        second: 'UUUUUUUUUUUUUUUU',
      },
      {
        first: 'VVVVVVVVVVVVVVVV',
        second: 'WWWWWWWWWWWWWWWW',
      },
      {
        first: 'YYYYYYYYYYYYYYYY',
      },
      {
        first: 'ZZZZZZZZZZZZZZZZ',
      },
      {
        first: 'XXXXXXXXXXXXXXXX',
      },
      {
        first: 'ZZZZZZZZZZZZZZZZ',
      },
    ])
  },
  getRanking: async (req: Request, res: Response) => {
    res.json([
      {
        name: 'Б. Балданбаатар',
        score1: 100,
        score2: 50,
        total: 150,
        rank: 1,
      },
      {
        name: 'Б. Балданбаатар',
        score1: 99,
        score2: 49,
        total: 148,
        rank: 2,
      },
      {
        name: 'Б. Балданбаатар',
        score1: 98,
        score2: 48,
        total: 146,
        rank: 3,
      },
      {
        name: 'Б. Балданбаатар',
        score1: 97,
        score2: 47,
        total: 144,
        rank: 4,
      },
      {
        name: 'Б. Балданбаатар',
        score1: 96,
        score2: 47,
        total: 143,
        rank: 5,
      },
      {
        name: 'Б. Балданбаатар',
        score1: 95,
        score2: 46,
        total: 141,
        rank: 6,
      },
      {
        name: 'Б. Бадамсэрэжид',
        score1: 94,
        score2: 45,
        total: 139,
        rank: 7,
      },
      {
        name: 'Б. Балданбаатар',
        score1: 93,
        score2: 44,
        total: 137,
        rank: 8,
      },
    ])
  },
}
