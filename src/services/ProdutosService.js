import axiosInstance from '../plugins/axios'
import ApiException from '../exceptions/ApiException'

export async function listar() {
  return axiosInstance
    .get('/products')
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      throw new ApiException(e)
    })
}
