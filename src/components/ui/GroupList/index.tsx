import React, { FC, useState } from 'react'
import { GroupListItem } from '../GroupItem';
import { GroupInput, GroupListDiv, GroupListHeader, GroupTitle, IconPlus } from './GroupListElement';
import { Search } from '../Search/index';

interface GroupListProps {
    groups: any[];
    title:string;
    onAddGroup?: (group: any) => void;
    onDeleteGroup?: (group: any) => void;
    onEditGroup?: (group: any) => void;
}
export const GroupList:FC<GroupListProps> = ({title,groups}) => {
  const [show, setShow] = useState(false);
  return (
    <GroupListDiv>
      <GroupListHeader>
        <GroupTitle>{title}</GroupTitle>
        <IconPlus onClick={()=>setShow(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon__plus" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </IconPlus>
      </GroupListHeader>
      {
        show &&
        <GroupInput type="text"
        placeholder="Add a group"
        onBlur={()=>setShow(false)} 
        />
      }
        <Search/>
      <GroupListItem/>
      <GroupListItem/>
      <GroupListItem/>
      <GroupListItem/>
      <GroupListItem/>
      <GroupListItem/>
    </GroupListDiv>
  )
}
