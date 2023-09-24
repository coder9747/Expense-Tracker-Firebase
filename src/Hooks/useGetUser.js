import React from 'react'

const useGetUser = () => {
  const {name,email,userId,photoUrl} = JSON.parse(localStorage.getItem("user"));
  return {name,email,userId,photoUrl};
}

export default useGetUser
