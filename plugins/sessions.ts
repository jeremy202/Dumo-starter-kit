import api from '~/api'
import { Account } from '~/typings'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  api.setBaseUrl(`${config.public.apiBaseUrl}`)

  const token = useCookie('token')
  const account = useCookie<Account>('account')

  if (token.value && account.value) {
    const authStore = useAuthStore()

    api.setToken(token.value)

    authStore.token = String(token.value)

    authStore.account = JSON.parse(JSON.stringify(account.value))
  }
})
