import React from 'react'
import { GroupListElement, GroupListImage, GroupListName } from './GroupItem';

export const GroupListItem = () => {
  return (
    <GroupListElement>
        <GroupListImage src='https://scontent.flim17-1.fna.fbcdn.net/v/t39.30808-6/278306068_412025714082183_2377435891501041767_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=2w9usBkWJhkAX_gF9tt&_nc_ht=scontent.flim17-1.fna&oh=00_AT-hRx2rou4HLJQyGnYAxoRN2iX3xNBsBgLcaHr0vVXIig&oe=625A6FA7' />
        <GroupListName>Group Name
        </GroupListName>
      </GroupListElement>
  )
}
