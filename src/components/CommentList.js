import React, {useEffect, useState} from 'react';
import {getCommentMock} from "../api";
import {Link} from "react-router-dom";
import Item from "../Item";

function CommentList() {
    const [comment, setComment] = useState([])
    useEffect(() => {
        getCommentMock().then(res => {
            setComment(res.data)
        })
    }, [])


    return (
        <div>
            {comment.map((commentObj, idx) => (
                <div key={idx}>
                    <h4>{commentObj.user}</h4>
                    <p>{commentObj.text}</p>
                </div>
            ))
            }
        </div>
    );
};

export default CommentList;