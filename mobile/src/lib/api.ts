import axios from 'axios'

export const api = axios.create({
  // sempre trocar pelo meu endereço na rede para rodar localmente
  baseURL: '<backend_url>',
})
