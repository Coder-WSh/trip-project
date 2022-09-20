 import newAxios from "../require"

 export function getDetail(houseId) {
     return newAxios.get({
         url: "detail/infos",
         params:{
            houseId
         }
     })
 }
// http://123.207.32.32:1888/api/detail/infos?houseId=44173741