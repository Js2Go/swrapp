import { get } from '../utils/request'

export const getCaptcha = async () => {
  return await get(
    '/captcha',
    null,
    {
      accept: 'image/png',
    },
    {
      responseType: 'arraybuffer'
    }
  )
}
