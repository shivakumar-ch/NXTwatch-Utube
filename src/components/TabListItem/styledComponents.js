import styled from 'styled-components'

export const LiContainer = styled.li`
  height: 35px;
  margin: 0px;
  width: 100vw;
  background-color: ${props => props.clr};
  display: flex;
  padding-left: 30vw;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
    padding-left: 0vw;
  }
`
export const Para = styled.p`
  margin-left: 10px;
`
export const Btn = styled.button`
  border: none;
  background-color: transparent;
  color: ${props => props.clr};
  font-weight: ${props => props.weight};
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 100%;
  }
`
