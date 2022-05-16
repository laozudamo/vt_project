import { defineStore } from 'pinia';
import { getUserInfo } from '@/api/user';
import { UserInfo } from '@/types/store'

export const useUserStore = defineStore({
  id: 'app-user',
  state: () => ({
    // user info
    userInfo: null,
    // token
    token: undefined,
    // roleList
    roleList: [],
    // Whether the login expired
    sessionTimeout: false,
    // Last fetch time
    lastUpdateTime: 0,
  }),
  getters: {

  },
  actions: {
    async getUserInfo() {
      // getUserInfo()
    }
  }
})