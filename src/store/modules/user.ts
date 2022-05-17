import { defineStore } from 'pinia';
import { userLogin } from '@/api/user';
import { loginForm } from '@/types/login'
import { GetInfoModel, loginModel } from '@/api/model'

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    userInfo: null,
    // token
    token: '',
    // roleList
    roleList: [],
  }),
  getters: {

  },
  actions: {
    setToken(token: string) {
      this.token = token
      window.localStorage.setItem('token', token)
    },
    
    async login(params: loginForm) {
      try {
        const data: loginModel = await userLogin(params)
        const { token } = data
        this.setToken(token)
      } catch (error) {
        return Promise.reject(error);
      }
    }
  }
})