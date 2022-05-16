import request  from "@/utils/http";
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