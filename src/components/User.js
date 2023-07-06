import React from 'react'
import { styled } from 'styled-components'

const UserContainer = styled.div`
height: 300px; 
width: 250px; 
background: #0D1117; 
border-radius: 10px;
margin-bottom: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Profile = styled.img`
width: 150px;
border-radius: 100px; 
`

const Link = styled.a`
color: #2F81F7;
`

const Name = styled.h3`
color: #fff;
`

const User = ({login,avatarUrl,htmlUrl,reposUrl}) => {
  return (
    <UserContainer>
        <Profile src={avatarUrl} alt={login}></Profile>
        <Name>{login}</Name>
        <Link href={htmlUrl}>Check Github Profile</Link>
        <Link href={reposUrl}>Check Repositories</Link>
    </UserContainer>
  )
}

export default User