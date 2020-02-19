import {request} from "./request"

export function searchMusic(songInfo){
  return request({
    url: "/search?keywords="+songInfo
  })
}