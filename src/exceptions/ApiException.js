export default class ApiException extends Error {
  constructor (error) {
    super()
    this.name = 'ApiException'
    this.message = this.formatErrorMessage(error)
  }

  formatErrorMessage (error) {
    if (error.response) {
      if (error.response.data && typeof error.response.data === 'string') {
        return error.response.data
      }
      return error.response.data.message || error.response.statusText || 'Erro desconhecido do servidor'
    } else if (error.request) {
      return 'Nenhuma resposta recebida do servidor'
    } else if (typeof error === 'string') {
      return error
    } else {
      return error.message
    }
  }
}
