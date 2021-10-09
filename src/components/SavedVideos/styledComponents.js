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
export const ViewsTimeDiv = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0px;
  width: 200px;
  font-size: 15px;
  line-height: 0px;
`

export const CountLi = styled.li`
  list-style-type: none;
  margin-right: 20px;
  color: ${props => props.clr};
`
export const TimeLi = styled.li`
  list-style-type: disc;
  //   margin-right: 20px;
  color: ${props => props.clr};
`
export const Thumbnail = styled.img`
  max-width: 30%;
  height: 100px;
  margin-right: 20px;
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.bg};
  padding-left: 20px;
`

export const VideosUl = styled.ul`
  list-style-type: none;
  padding: 20px;
`

export const Info = styled.div`
  width: 70%;
`
export const Para = styled.p`
  color: ${props => props.clr};
`

export const IconDiv = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${props => props.bgClr};
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Head = styled.h1`
  font-family: 'Roboto';
`

export const Li = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-end: 10px;
`
export const NoItemsPara = styled.h1`
  font-weight: bold;
  font-size: 15px;
`
export const NoItemsImg = styled.img`
  width: 90%;
  height: 60%;
  @media screen and (min-width: 768px) {
    width: 90%;
    height: 80%;
  }
`
export const NoItemsDiv = styled.div`
  width: 100%;
  height: 90%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
