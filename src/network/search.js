import {request} from "./request"

// 获取搜索列表
export function searchMusic(songInfo){
  return request({
    url: "/search?keywords="+songInfo
  })
}
// 获取歌曲播放url
export function searchId(id){
  return request({
    url: "/song/url?id="+id
  })
}
//获取歌词
export function text(id){
  return request({
    url: '/lyric?id='+id
  })
}
// 获取歌曲信息 
export function info(id){
  return request({
    url: "/song/detail?ids="+id
  })
}