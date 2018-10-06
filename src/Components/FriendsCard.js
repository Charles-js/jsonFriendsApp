import React from 'react'

const FriendsCard = ({user}) => {
  return (
    <div className='tc dib br4 ma3 grow pa2 bw2 shadow-7' width='200' height='300'>
      <img src={user.picture.large} alt="friends" />
      <div>
        <h5 className="f4 purple">{user.name.first}</h5>
        <p className='f6'>{user.email}</p>
      </div>
    </div>
  )
}

export default FriendsCard;