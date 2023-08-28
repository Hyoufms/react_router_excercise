import React, {useState} from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'


export default function Message() {

    const nevigate = useNavigate()

    const [message] = useState([
        {id:'001', title:'message1', content:'abcd'},
        {id:'002', title:'message2', content:'efgh'},
        {id:'003', title:'message3', content:'ijkl'},
        {id:'004', title:'message4', content:'mnop'}
    ])

    function showDetail(data) {
        //parameters: (path, params:{replace, state}), 
        nevigate('detail', {
            replace: false,
            state: {
                id: data.id,
                title: data.title,
                content: data.content,
            }
        })
    }

    
    return (
        <div>
            <ul>
                {
                    message.map((data)=>{
                        return (
                            <li key={data.id}>
                                {/* <Link to={`detail/${data.id}/${data.title}/${data.content}`}>{data.content}</Link> */}
                                {/* <Link to={`detail?id=${data.id}&title=${data.title}&content=${data.content}`}>{data.content}</Link> */}
                                <Link to="detail" state={{
                                    id:data.id,
                                    title: data.title,
                                    content: data.content,
                                    }}
                                >{data.title}</Link>
                                <button onClick={() => {showDetail(data)}}>view details</button>
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
