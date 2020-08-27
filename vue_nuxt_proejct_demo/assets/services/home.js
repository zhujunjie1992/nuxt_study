import request from '@/assets/utils/request'

export function category(){
  return request({
    url:'/home/swiperdata',
    method: 'get'
  })
}

export const banner = () =>{
  return request({
    url:'/home/swiperdata',
    method: 'get'
  })
}

export const catitems = () =>{
  return request({
    url:'/home/catitems',
    method: 'get'
  })
}