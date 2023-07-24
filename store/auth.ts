import { useRequestsStore } from './requests'
import api from '~/api'
import { Account } from '~/typings'

interface AuthState {
  token: string
  account: Account
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => {
    return {
      token: '',
      account: {
        id: '',
        created_at: '',
        updated_at: '',
        first_name: '',
        middle_name: '',
        last_name: '',
        email: '',
        country: '',
        phone_number: '',
        phone_number_verified_at: '',
        username: '',
        email_verified_at: '',
        key: '',
        state: null,
        login_notification: false
      },
    }
  },

  getters: {
    getToken: (state) => state.token,
    isAuthenticated: (state) => !!state.token,
    getUser: (state) => state.account,
  },

  actions: {
    setAuthSession() {
      api.setToken(this.token)

      const maxAge = 1 * 60 * 60 * 24
      const expires = new Date(Date.now() + maxAge * 1000)
      const options = {
        maxAge,
        expires,
      }
      useCookie('token', options).value = this.token
      useCookie<Account>('account', options).value = this.account
    },
    logout() {
      const maxAge = -1000
      const expires = new Date(Date.now() + maxAge * 1000)
      const options = {
        maxAge,
        expires,
      }

      useCookie<any>('token', options).value = ''
      useCookie<any>('account', options).value = ''

      window.location.href = window.location.origin + '/'
    },
  },
})
