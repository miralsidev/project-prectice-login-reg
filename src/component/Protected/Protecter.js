import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

const Protecter = ({ Component }) => {
    let Navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem('token')
        if (!token) {
            Navigate('/login')
        }
    }, [])
    return (
        <div>
            <Component />
        </div>
    )
}

export default Protecter
