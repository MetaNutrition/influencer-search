import React from "react"
import styled from "styled-components"

const FootBar = styled.footer`
  width: 100%;
  height: 70px;
  border-top: 2px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`

const Footer = () => {
  return (
    <FootBar>
      <a
        href="https://www.metnu.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        MetNu Home
      </a>
    </FootBar>
  )
}

export default Footer;