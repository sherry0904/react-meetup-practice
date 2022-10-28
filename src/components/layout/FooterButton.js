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

// 利用useNavigate完成路由轉跳
// 可直接傳入要跳轉的目標路由（可使用相對路徑）
// 傳入 (-1) 表示後退
// EX: navigate('/home', {replace: true});