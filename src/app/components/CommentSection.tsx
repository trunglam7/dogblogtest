import React, { useState } from 'react'
import style from './styles/CommentSection.module.css'

type CommentThreadIdProp = {
    commentThreadId: string
}

const CommentSection = ({commentThreadId} : CommentThreadIdProp) => {

    const [comments, setComments] = useState<any>([]);
    const [newComment, setNewComment] = useState('');

    return (
        <div className={style.commentSectionContainer}>
            <p>Comments</p>
            <div className={style.addCommentSection}>
                <input placeholder='Add comment here' onChange={e => setNewComment(e.target.value)}></input>
                <button onClick={() => addCommentHandler()}>Comment</button>
            </div>
            <div className={style.mainCommentSection}>
                {comments.map((comment : string) =>
                    <p className={style.userComment}>{comment}</p>
                )}
            </div>
        </div>
    )

    function addCommentHandler(){
        const newCommentsList = [...comments, newComment];
        setComments(newCommentsList);
    }
}

export default CommentSection