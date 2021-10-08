import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => props.clr};
  background-color: ${props => props.bgClr};
  padding-left: 10px;
  width: 15vw;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const TabDiv = styled.ul`
  list-style-type: none;
  padding-left: 10px;
  margin: 0px;
  height: 90vh;
  width: 15vw;
  color: ${props => props.clr};
  background-color: ${props => props.bgClr};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactUl = styled.ul`
  list-style-type: none;
  padding: 0px;
`

export const ContactLi = styled.li`
  display: flex;
  align-items: center;
`
export const Para = styled.p`
  width: 80%;
  font-size: 13px;
`

export const ContactImg = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 10px;
`
