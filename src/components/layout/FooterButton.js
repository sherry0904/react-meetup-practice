import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Button, CoolButton} from './StyleButton'

function FooterButton() {
    const navigate = useNavigate();
    return (
        <div>
            <Button onClick={()=>{navigate('/')}}>Home</Button>
            <CoolButton onClick={()=>{navigate(-1)}}>上一頁</CoolButton>
        </div>
    )
}

export default FooterButton