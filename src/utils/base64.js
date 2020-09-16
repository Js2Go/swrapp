import base64 from 'base64-js'

export const bufferToBase64 = (buffer) => {
  const bytes = new Uint8Array(buffer)
  return base64.fromByteArray(bytes)
}
