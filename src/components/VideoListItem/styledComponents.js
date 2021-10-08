import styled from 'styled-components'

export const LiContainer = styled.li`
  width: 30%;
  height: 300px;
  margin: 5px;
  padding: 0px;
  line-height: 10px;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
`
export const Thumbnail = styled.img`
  width: 100%;
  height: 50%;
`

export const Content = styled.div`
  color: 'red';
  line-height: 16px;
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
export const TitlePara = styled.p`
  width: 90%;
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.clr};
`
export const Para = styled.p`
  font-size: 13px;
  line-height: 0px;
  color: ${props => props.clr};
`
