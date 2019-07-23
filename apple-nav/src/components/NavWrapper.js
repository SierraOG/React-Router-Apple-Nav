import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './Nav'
import SubNav from './SubNav'

import appleData from '../apple-data.js'

import styled from 'styled-components';

const NavBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: black;
  height: 100px;
  align-items: center;
`

function NavWrapper(props) {
    const titles = appleData.navbartitles;
    return(
        <div>
            <NavBar>
                {titles.map((title) => <Nav title = {title} />)}
            </NavBar>
        </div>
)}

export default NavWrapper