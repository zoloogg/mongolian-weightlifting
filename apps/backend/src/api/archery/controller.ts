import { Ranking } from '../../database/models/ranking'
import { Request, Response } from 'express'

export const archeryController = {
  getMatch: async (req: Request, res: Response) => {
    res.json([
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        name: 'Б. Балданбаатар',
        arrow1: 1,
        arrow2: 2,
        arrow3: 3,
        arrow4: 4,
        arrow5: 5,
        arrow6: 6,
        total: 100,
        set: 1,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        name: 'Б. Бадамсэрэжид',
        arrow1: 7,
        arrow2: 8,
        arrow3: 9,
        arrow4: 10,
        arrow5: 11,
        arrow6: 12,
        total: 200,
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
        firstScore: 1,
        secondScore: 9,
        thirdScore: 13,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'DDDDDDDDDDDDDDDD',
        second: 'EEEEEEEEEEEEEEEE',
        third: 'FFFFFFFFFFFFFFFF',
        firstScore: 2,
        secondScore: 10,
        thirdScore: 14,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'GGGGGGGGGGGGGGGG',
        second: 'HHHHHHHHHHHHHHHH',
        third: 'IIIIIIIIIIIIIIII',
        firstScore: 3,
        secondScore: 11,
        thirdScore: 15,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'KKKKKKKKKKKKKKKK',
        second: 'LLLLLLLLLLLLLLLL',
        third: 'MMMMMMMMMMMMMMMM',
        firstScore: 4,
        secondScore: 12,
        thirdScore: 16,
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'NNNNNNNNNNNNNNNN',
        second: '',
        third: '',
        firstScore: 5,
        secondScore: '',
        thirdScore: '',
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'QQQQQQQQQQQQQQQQ',
        second: '',
        third: '',
        firstScore: 6,
        secondScore: '',
        thirdScore: '',
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'TTTTTTTTTTTTTTTT',
        second: '',
        third: '',
        firstScore: 7,
        secondScore: '',
        thirdScore: '',
      },
      {
        category: 'U14 - Эрэгтэйчүүдийн ганцаарчилсан',
        first: 'VVVVVVVVVVVVVVVV',
        second: '',
        third: '',
        firstScore: 8,
        secondScore: '',
        thirdScore: '',
      },
    ])
  },
  getRanking: async (req: Request, res: Response) => {
    const ranking = await Ranking.find({ isActive: true })

    const r = ranking.map((item, idx) => {
      return {
        rank: idx + 1,
        name: item.name,
        first: item.data.first,
        second: item.data.second,
        total: item.data.total,
        category: item.data.category,
      }
    })
    res.json(r)
  },
}
