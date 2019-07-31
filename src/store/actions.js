import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutation-type'

import {
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api/index'

export default{
    //异步获取地址
    async getAddress({commit,state}){
        const geohash=state.latitude+','+state.longitude;
      const result= await reqAddress(geohash);
      if(result.code===0){
          const address=result.data;
          commit(RECEIVE_ADDRESS,{address})

      }
    },
   
    //异步获取食品分类列表
    async getCategorys({commit,state}){
      const result= await reqFoodCategorys();
      if(result.code===0){
          const categorys=result.data;
          commit(RECEIVE_CATEGORYS,{categorys})

      }
    },
    //异步获取商家列表
    async getShops({commit,state}){
      const {latitude,longitude}=state
      const result= await reqShops(longitude,latitude);
      if(result.code===0){
          const shops=result.data;
          commit(RECEIVE_SHOPS,{shops})

      }
    }

}