import { getCaptcha } from '../apis/login'
import { bufferToBase64 } from '../utils/base64'
import useSWR from 'swr'

export const useCaptcha = () => {
  const getCode = async () => {
    const data = await getCaptcha()
    const image = bufferToBase64(data)
    return `data:image/png;base64,${image}`
  }
  
  const { data, error, revalidate } = useSWR('/', getCode)

  return {
    data,
    error,
    revalidate
  }
}

