import React, {useState} from 'react'
import { Link, Outlet } from 'react-router-dom'


export default function Message() {

    const [message] = useState([
        {id:'001', title:'message1', content:'abcd'},
        {id:'002', title:'message2', content:'efgh'},
        {id:'003', title:'message3', content:'ijkl'},
        {id:'004', title:'message4', content:'mnop'}
    ])

    
    return (
        <div>
            <ul>
                {
                    message.map((data)=>{
                        return (
                            <li key={data.id}>
                                <Link to={`detail?id=${data.id}&title=${data.title}&content=${data.content}`}>{data.content}</Link>
                            </li>
                        )
                    })
                }
            </ul>
            <hr />
            <Outlet />
        </div>
    )
}
