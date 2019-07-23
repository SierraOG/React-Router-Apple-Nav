import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav'
import SubNav from './SubNav'

import appleData from '../apple-data.js'

import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 80%;
  margin: auto;
  height: 100px;
`
const NavDivWrap = styled.div`
  background-color: black;
  height: 100px;
`


function NavWrapper(props) {
    const titles = appleData.navbartitles;
    return(
        <NavDivWrap>
            <NavBar>
                {titles.map((title) => <Nav title = {title} />)}
            </NavBar>
        </NavDivWrap>
)}

export default NavWrapper