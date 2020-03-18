import {request} from "./request";

export function getHomeMultidata() {
    return request({
        url: '/home/index'
    })
}

export function getHomeGoodsCategory(cateId) {
    return request({
        url: '/goods/category',
        params: {
            id: cateId
        }
    })
}

export function getHomeGoodsList(cateId, page) {
    return request({
        url: '/goods/list',
        params: {
            categoryId: cateId,
            page: page,
            limit: 10
        }
    })
}