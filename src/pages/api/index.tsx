import React from 'react'

export const getAllCarts = () => {
  return fetch('https://dummyjson.com/carts').then((res) => res.json())
}

export const getAllProduct = () => {
  return fetch('https://dummyjson.com/products').then((res) => res.json())
}

export const getAllUsers = () => {
  return fetch('https://dummyjson.com/users').then((res) => res.json())
}

export const getASingleCart = () => {
  return fetch('https://dummyjson.com/carts/1').then((res) => res.json())
}

export const getAllComments = () => {
  return fetch('https://dummyjson.com/comments').then((res) => res.json())
}
