import React from 'react';

import { Link } from 'react-router-dom'

import appleData from '../apple-data.js'

import styled from 'styled-components';

const SubNavDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 100px;
  align-items: center;
`

function SubNav(props) {
    let title = props.match.params.title;
    const appleItemArray = appleData[title.toLowerCase()];

    return(
        <SubNavDiv>
         {appleItemArray.map((item) => (
             <div>
                <p>{item.productName}</p>
                <img src = {item.thumbnail}/>
            </div>
            ))}
        </SubNavDiv>
    )
}

export default SubNav