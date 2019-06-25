import { fetchGet, fetchPut } from '../util/http'
import Cookies from 'js-cookie'

const token = Cookies.get('TokenKey') || 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiIxMTMyNjIyOTA1NjI1MTUzNTM2Iiwic3ViIjoi5bCP6b6Z6b6ZIiwiaWF0IjoxNTYxMzY5ODk3LCJleHAiOjE1NjMyOTU3MzAsInJvbGUiOiJhZG1pbiJ9.EQur_1AEgL8eCuQvuJYnu7KZqIgdr4NFL6CKxG6ShSI'

const getUserInfoApi = () => fetchGet(`/user/token/${token}`)

const updateUserInfoApi = info => fetchPut('/user', info)

const getUserWatchApi = () => fetchGet('/')

export {
    getUserInfoApi,
    updateUserInfoApi
}