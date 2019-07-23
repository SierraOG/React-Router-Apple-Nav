import React from 'react';

import { Link } from 'react-router-dom'

import appleData from '../apple-data.js'

import styled from 'styled-components';

const SubNavDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 150px;
  align-items: center;
  background-color: lightgrey;
`

const Iconimg = styled.img`
  max-width:50px;
  max-height:50px;
`

function SubNav(props) {
    let title = props.match.params.title;
    const appleItemArray = appleData[title.toLowerCase()];

    return(
        <SubNavDiv>
         {appleItemArray.map((item) => (
             <div>
                <Iconimg src = {item.thumbnail}/>
                <p>{item.productName}</p>
            </div>
            ))}
        </SubNavDiv>
    )
}

export default SubNav