import React from 'react'
import { IconSearch, SearchInput, SearchDiv, InputLabel } from './Search';

export const Search = () => {
    return (
        <SearchDiv>
            <SearchInput type="text"
                placeholder="Search"
                id='search'
                autoComplete="off"
            />
            <InputLabel htmlFor='search'>
                <IconSearch>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </IconSearch>
            </InputLabel>
        </SearchDiv>
    )
}
