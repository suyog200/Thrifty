import styled from 'styled-components'
import { Button } from '@mui/material'

const InputBoxx = styled.div`
    height: 80px;
    width: 100%;
    background-color: #f8f8f8;
    border-radius: 40px;
    display: flex;
    border : 1px solid #f0f0f0;
    overflow: hidden;
    .inputWrapper {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        input {
            width: 100%;
            height: 100%;
            border: none;
            padding: 0 20px;
            font-size: 16px;
            color: #333;
            background-color: transparent;
            border-right : 1px solid #f0f0f0;
            &::placeholder {
                color: #999;
            }
            &:focus {
                outline: none;
            }
        }
    }
`

const InputBox = () => {
  return (
    <InputBoxx>
        <div className='inputWrapper' >
            <input type="text" placeholder="Source City" />
        </div>
        <div className='inputWrapper'>
            <input type="text" placeholder="Destination City" />
        </div>
        <div className='inputWrapper'>
            <input type="text" placeholder="Arrival Date / Departure Date" />
        </div>
        <div className='inputWrapper'>
            <Button variant="contained" color="primary" sx={{width : "100%", height : "100%"}} >Search Flight</Button>
        </div>
    </InputBoxx>
  )
}

export default InputBox