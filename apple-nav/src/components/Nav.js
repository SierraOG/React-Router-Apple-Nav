import React from 'react';

import { NavLink} from "react-router-dom";

import styled from 'styled-components';

const NavElement = styled.div`
    text-decoration: none;
    color: white;
`


function Nav({title}) {

    return(
        <div className="nav-element">
            <NavLink to ={`/${title}`} activeClassName="activeNavButton">{title}</NavLink>
        </div>
    )
}

export default Nav