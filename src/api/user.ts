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