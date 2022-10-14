import {API_KEY} from './constants/constant'
export const popular = `/discover/movie?api_key=${API_KEY}&with_network=213`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const Drama = `/discover/movie?api_key=${API_KEY}&with_genres=27`
export const Romance = `/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const Comedy = `/discover/movie?api_key=${API_KEY}&with_genres=35`