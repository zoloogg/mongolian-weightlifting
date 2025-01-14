import { Match } from '../../database/models/match'
import { Ranking } from '../../database/models/ranking'
import { Request, Response } from 'express'

export const archeryController = {
  getMatch: async (req: Request, res: Response) => {
    const data = await Match.find({})
    res.json(data)
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
    const ranking = await Ranking.findOne({ isActive: true })
    console.log('ranking: ', ranking)

    if (ranking === null) {
      res.json([])
      return
    }

    const r = ranking.data.map((item: any, idx: number) => {
      return {
        rank: idx + 1,
        name: item.name,
        first: item.score1,
        second: item.score2,
        total: item.total,
        category: item.category,
      }
    })
    res.json(r)
  },
  postMatch: async (req: Request, res: Response) => {
    const { setIdx } = req.params
    const {
      category,
      name,
      arrow1,
      arrow2,
      arrow3,
      arrow4,
      arrow5,
      arrow6,
      setScore,
    } = req.body

    const match = await Match.updateOne(
      { setIdx: Number(setIdx) },
      {
        setIdx: Number(setIdx),
        name,
        category,
        arrow1,
        arrow2,
        arrow3,
        arrow4,
        arrow5,
        arrow6,
        setScore,
      }
    )
    res.json(match)
  },
}
