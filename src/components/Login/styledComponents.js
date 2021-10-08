import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  background-color: ${props => props.theme};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Card = styled.div`
  height: 55vh;
  width: 90%;
  box-shadow: 5px 5px 8px 10px ${props => props.shadowClr};
  padding: 30px;
  background-color: ${props => props.clr};
  border-radius: 5px;
  @media screen and (min-width: 768px) {
    width: 30vw;
  }
`
export const Form = styled.form`
  height: 80%;
  width: 100%;
`
export const ErrMsg = styled.p`
  color: red;
  font-size: 10px;
`

export const Image = styled.img`
  height: 30px;
  width: 120px;
  margin-bottom: 10px;
`
export const Label = styled.label`
  font-style: 'Roboto';
  color: ${props => props.clr};
  font-size: 13px;
`

export const CheckboxLabel = styled(Label)`
  font-weight: bold;
  color: ${props => props.clr};
  font-size: 10px;
  margin-bottom: 3px;
`

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  outline: none;
  border-radius: 5px;
  border: 1px solid #475569;
`
export const Btn = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  color: #ffffff;
  margin-top: 10px;
`
