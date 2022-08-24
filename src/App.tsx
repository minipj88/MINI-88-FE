import { ChangeEvent, useState } from "react";
import styled from "styled-components"
import { helloWorld } from "./store/slices/ExampleSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

interface HelloWorldProps {
  active: boolean
  disabled?: boolean;
}

const HelloWrold = styled.div`
color:  royalblue;
background-color: ${(props:HelloWorldProps) => props.active ? '#f41' : 'gray'};
padding: 12px;
  p{
    font-size: 24px;
    color:white;
    font-weight:bold;
  }
 
`
const Body = styled.p`
  color: white;
  background-color: greenyellow;
  width: 420px;
  margin: auto;
  text-align:center;
  padding: 10px 0px;
  border-radius: 10px;
`

const MainButton = styled.button`
  padding: 4px;
  width: fit-content;
  height: fit-content;
  font-weight:bold;
  border: none;
  background-color:white;
  color: green;
  border-radius: 10px;
  border:none;
  cursor:pointer;
`

function App() {
  const [active,setActive] = useState(false);
  const [myName,setMyname] = useState('')
  const dispatch = useAppDispatch()
  const exampleState = useAppSelector(state => state.example)

  const buttonClickHandler = () => {
    setActive(prev => !prev)
    dispatch(helloWorld({myname:myName}))
  }

  const mynameChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {currentTarget:{value}} = e
    setMyname(value)
  }

  return (
   <HelloWrold active={active}>
    Hello world!
    {exampleState.allString && <p>{exampleState.allString}</p>}
    <Body>
      Frontend
    </Body>
    <input type="text" value={myName} onChange={mynameChangeHandler} />
    <MainButton onClick={buttonClickHandler}>안녕 난 버튼</MainButton>
    
    </HelloWrold>
  )
}

export default App
