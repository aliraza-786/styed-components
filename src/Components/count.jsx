import React, { useState } from 'react';
import styled from 'styled-components';


const StyledCounter = styled.div`
  background-color: #CEF4ED;
  width: 200px;
  margin: auto;
  height: 170px;
  padding: 10px;
`
const Paragraph = styled.p`
  border: 2px solid black;
`
const Button = styled.button`
  margin: 5px;
  padding: 5px;
  width: 50px;
  background-color: #CFFA65;
  font-size: 1.5em;
`
const DecrementBtn = styled(Button)`
  background-color: #F05341
`;

export default function Counter() {
    const [count, setCount] = useState();
    // const [message, setMessage] = useState(''); 

  return (
    <>
        <StyledCounter>
            <Paragraph>{count}</Paragraph>
            <Button onClick={() => setCount(count +1)}>+</Button>
            <DecrementBtn onClick={()=> setCount(count -1)}>-</DecrementBtn>
            {/* <input
                type="text"
                value={message}
                placeholder="Enter a message"
                onChange={e => setMessage(e.target.value)}
            />
            <p>
                <strong>{message}</strong>
            </p> */}
        </StyledCounter>        
    </>
  );
}
