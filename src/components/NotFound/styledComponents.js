import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 85vw;
  background-color: ${props => props.bgClr};
  color: ${props => props.clr};
  overflow-y: auto;

  @media screen and (max-width: 767px) {
    width: 100vw;
  }
`
export const Card = styled.div`
  height: 90vh;
  color: #ffffff;
  display: flex;
`
export const NoItemsPara = styled.p`
  font-size: 15;
`
export const NoItemsImg = styled.img`
  width: 60%;
  height: 70%;
`
export const NoItemsDiv = styled.div`
  width: 100%;
  height: 90%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  line-height: 10px;
`
