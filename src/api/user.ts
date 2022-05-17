import request  from "@/utils/http";
interface userInfo {
  token: string
}

export function getUserInfo(data: userInfo) {
  return request({
    method: 'get',
    url: '/login',
    data
  })
}

interface loginData {
  username: string,
  password: string
}

export function userLogin(data: loginData) {
  return request({
    method: 'post',
    url: '/login',
    data
  })
}