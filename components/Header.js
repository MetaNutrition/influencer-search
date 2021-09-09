import React from "react"
import styled from "styled-components"
// import Link from 'next/link'

const NavBar = styled.header`
  width: 70%;
  height: 90px;
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`
const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: transparent;
`
const NavItem = styled.li`
  float: left;
  padding-right: 3rem;
  margin-right: 2rem;
  line-height: 3rem;
  font-weight: 600;
  border-bottom: 2px solid #eaeaea;
`

const Header = () => {
  return (
    <NavBar>
      <NavList>
        <NavItem>
          {/* Each NavItem will contain a Link component to route to respective pages */}
          Search
        </NavItem>
        <NavItem>
          Saved
        </NavItem>
        <NavItem>
          About
        </NavItem>
      </NavList>
    </NavBar>
  )
}

export default Header;