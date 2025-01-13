import { Request, Response } from 'express'

export const archeryController = {
  getMatch: async (req: Request, res: Response) => {
    res.json([
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
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
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
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
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'AAAAAAAAAAAAAAAA',
        second: 'BBBBBBBBBBBBBBBB',
        third: 'CCCCCCCCCCCCCCCC',
        firstScore: 100,
        secondScore: 90,
        thirdScore: 80,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'DDDDDDDDDDDDDDDD',
        second: 'EEEEEEEEEEEEEEEE',
        third: 'FFFFFFFFFFFFFFFF',
        firstScore: 70,
        secondScore: 60,
        thirdScore: 50,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'GGGGGGGGGGGGGGGG',
        second: 'HHHHHHHHHHHHHHHH',
        third: 'IIIIIIIIIIIIIIII',
        firstScore: 40,
        secondScore: 30,
        thirdScore: 20,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'KKKKKKKKKKKKKKKK',
        second: 'LLLLLLLLLLLLLLLL',
        third: 'MMMMMMMMMMMMMMMM',
        firstScore: 30,
        secondScore: 20,
        thirdScore: 10,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'NNNNNNNNNNNNNNNN',
        second: '',
        third: '',
        firstScore: 20,
        secondScore: 10,
        thirdScore: '',
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'QQQQQQQQQQQQQQQQ',
        second: '',
        third: '',
        firstScore: 10,
        secondScore: 0,
        thirdScore: '',
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'TTTTTTTTTTTTTTTT',
        second: '',
        third: '',
        firstScore: 100,
        secondScore: 90,
        thirdScore: '',
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'VVVVVVVVVVVVVVVV',
        second: '',
        third: '',
        firstScore: 100,
        secondScore: 90,
        thirdScore: '',
      },
    ])
  },
  getRanking: async (req: Request, res: Response) => {
    res.json([
      {
        name: 'Б. Балданбаатар',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 100,
        second: 50,
        total: 150,
        rank: 1,
      },
      {
        name: 'BBBBBBBBBBBBBBBB',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 99,
        second: 49,
        total: 148,
        rank: 2,
      },
      {
        name: 'CCCCCCCCCCCCCCCC',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 98,
        second: 48,
        total: 146,
        rank: 3,
      },
      {
        name: 'EEEEEEEEEEEEEEEE',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 97,
        second: 47,
        total: 144,
        rank: 4,
      },
      {
        name: 'FFFFFFFFFFFFFFFF',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 96,
        second: 47,
        total: 143,
        rank: 5,
      },
      {
        name: 'GGGGGGGGGGGGGGGG',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 95,
        second: 46,
        total: 141,
        rank: 6,
      },
      {
        name: 'HHHHHHHHHHHHHHHH',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 94,
        second: 45,
        total: 139,
        rank: 7,
      },
      {
        name: 'IIIIIIIIIIIIIIII',
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 93,
        second: 44,
        total: 137,
        rank: 8,
      },
    ])
  },
}
