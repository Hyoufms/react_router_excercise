import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Header() {
    const nevigate = useNavigate()

    function back() {
        nevigate(-1)
    }
    function forward() {
        nevigate(1)
    }

    return (    
        <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header">
                <h2>React Router Demo</h2>
                <button onClick={back}>←</button>
                <button onClick={forward}>→</button>
            </div>

        </div>
    )
}
