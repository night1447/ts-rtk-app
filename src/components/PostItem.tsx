import React, {FC} from 'react';
import {IPost} from "../models/IPost";

interface PostItemProps {
    post: IPost,
    deletePost: (post: IPost) => void,
    updatePost: (post: IPost) => void,
}

const PostItem: FC<PostItemProps> = ({post, deletePost, updatePost}) => {
    const deletePostHandler = (event: React.MouseEvent) => {
        event.stopPropagation();
        deletePost(post);
    }
    const updatePostHandler = () => {
        const title = prompt('Обновить поле на') || "";
        updatePost({...post, title})
    }
    return (
        <div className={'post'} onClick={updatePostHandler}>
            {post.id}. {post.title}
            <button onClick={(event) => deletePostHandler(event)}>Delete</button>
        </div>
    );
};

export default PostItem;