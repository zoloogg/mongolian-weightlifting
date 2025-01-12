import axios, { AxiosResponse } from 'axios'

const { API_BASE_URL = 'http://localhost:4000' } = process.env

console.log('ENV', process.env)

const sendGet = async <T>(
  url: string,
  params: Record<string, string | number | string[]> | undefined
): Promise<AxiosResponse<T>> => {
  const searchParams = new URLSearchParams()

  if (params !== undefined) {
    Object.keys(params).reduce<Record<string, string>>((acc, k) => {
      console.log('k: ', typeof params[k])

      if (typeof params[k] === 'string') {
        searchParams.append(k, params[k])
      }
      if (typeof params[k] === 'number') {
        searchParams.append(k, params[k].toString())
      }
      if (typeof params[k] === 'object') {
        params[k].forEach((v) => {
          searchParams.append(k, v)
        })
      }

      return acc
    }, {})
  }

  const res = await axios.get(`${API_BASE_URL}/api${url}`, {
    params: searchParams,
  })

  return res
}

const sendPost = async (url: string, body: any): Promise<AxiosResponse> => {
  const res = await axios.post(`${API_BASE_URL}/api${url}`, body, {})

  return res
}

const sendPatch = async (url: string, body: any): Promise<AxiosResponse> => {
  const res = await axios.patch(`${API_BASE_URL}/api${url}`, body, {})

  return res
}

export { sendGet, sendPost, sendPatch }
