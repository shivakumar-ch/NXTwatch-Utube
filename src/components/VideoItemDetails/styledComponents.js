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
export const VideoDiv = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
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
export const LoaderDiv = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ViewsTimeDiv = styled.ul`
  display: flex;
  justify-content: flex-start;
  padding: 0px;
  width: 200px;

  font-size: 13px;
  line-height: 0px;
`
export const TitlePara = styled.p`
  width: 90%;
  //   background-color: red;
  font-size: 15px;
  color: ${props => props.clr};
  margin-bottom: 0px;
`
export const Para = styled.p`
  font-size: 13px;
  color: ${props => props.clr};
`
export const CountLi = styled.li`
  list-style-type: none;
  margin-right: 20px;
  font-size: 15px;
  color: ${props => props.clr};
`
export const TimeLi = styled.li`
  list-style-type: disc;
  //   margin-right: 20px;
  color: ${props => props.clr};
  font-size: 15px;
`

export const InfoDiv = styled.div`
  line-height: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 0px;
  //   background-color: red;
  margin-top: 0px;
  color: ${props => props.clr};
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const BtnLi = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  //   background-color: gray;
  width: 70px;

  margin-right: 5px;
`
export const BtnPara = styled.p`
  color: ${props => props.clr};
`

export const LikesUl = styled.ul`
  max-width: 250px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  //   background-color: red;
  padding: 0px;
`
export const HrLine = styled.hr`
  width: 100%;
  margin-top: 0px;
  background-color: #cccccc;
  color: red;
  border: 1px solid #cccccc;
`

export const Content = styled.div`
  line-height: 15px;
  font-size: 15px;
  padding: 10px;
  margin: 0px;
  font-family: 'Roboto';
`
export const ContentDiv = styled.div`
  display: flex;
  align-items: flex-start;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  margin-top: 20px;
  border-radius: 15px;
`
