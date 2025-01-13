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
        first: 100,
        second: 50,
        total: 150,
        rank: 1,
      },
      {
        name: 'BBBBBBBBBBBBBBBB',
        first: 99,
        second: 49,
        total: 148,
        rank: 2,
      },
      {
        name: 'CCCCCCCCCCCCCCCC',
        first: 98,
        second: 48,
        total: 146,
        rank: 3,
      },
      {
        name: 'EEEEEEEEEEEEEEEE',
        first: 97,
        second: 47,
        total: 144,
        rank: 4,
      },
      {
        name: 'FFFFFFFFFFFFFFFF',
        first: 96,
        second: 47,
        total: 143,
        rank: 5,
      },
      {
        name: 'GGGGGGGGGGGGGGGG',
        first: 95,
        second: 46,
        total: 141,
        rank: 6,
      },
      {
        name: 'HHHHHHHHHHHHHHHH',
        first: 94,
        second: 45,
        total: 139,
        rank: 7,
      },
      {
        name: 'IIIIIIIIIIIIIIII',
        first: 93,
        second: 44,
        total: 137,
        rank: 8,
      },
    ])
  },
}
