import React from 'react'
import { Media } from 'reactstrap'
export default function RenderLeader(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-2 align-self-center"><img src={props.leader.image} alt={props.leader.name} /></div>
                <div className="col-12 col-sm-10">
                    <h4>{props.leader.name}</h4>
                    <p>{props.leader.description}</p>
                </div>
            </div>
        </div>
    )
}
