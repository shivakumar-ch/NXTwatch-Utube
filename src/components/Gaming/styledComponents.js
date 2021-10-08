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
export const ListUl = styled.ul`
  list-style-type: none;
  padding: 0px;
  display: flex;
  flex-wrap: wrap;
`

export const NoItemsPara = styled.p`
  font-weight: bold;
`
export const NoItemsImg = styled.img`
  width: 250px;
  height: 180px;
`
export const NoItemsDiv = styled.div`
  width: 100%;
  height: 90%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 10px;
`
export const RetryBtn = styled.button`
  padding: 5px;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: #4f46e5;
  border: none;
  color: #f1f1f1;
`
export const LoaderDiv = styled.div`
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ViewsTimeDiv = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0px;
  width: 200px;
  font-size: 15px;
  line-height: 0px;
`

export const CountPara = styled.p`
  margin-right: 20px;
  color: ${props => props.clr};
  font-size: 15px;
  width: 100%;
`
export const TimeLi = styled.li`
  list-style-type: disc;
  //   margin-right: 20px;
  color: ${props => props.clr};
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 320px;
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
  display: flex;
  flex-wrap: wrap;
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

export const VideosLi = styled.li`
  display: flex;
  align-items: center;
  margin: 10px;
  margin-bottom: 10px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
