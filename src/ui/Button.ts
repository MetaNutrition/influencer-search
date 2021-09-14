import styled from "styled-components"

type ButtonProp = {
  primary: boolean
}

const Button = styled.button<ButtonProp>`
  background: transparent;
  border-radius: 5px;
  border: 2px solid black;
  color: black;
  margin: 1rem;
  padding: 1rem;
  width: 200px;
  height: 60px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1em;
  background: ${props => props.primary ? "black" : "transparent"};
  color: ${props => props.primary ? "white" : "black"};
`

export default Button