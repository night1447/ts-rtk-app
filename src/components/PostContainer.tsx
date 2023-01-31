import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";

const PostContainer = () => {
    const [limit, setLimit] = useState(100);
    const {data: posts, isLoading, isError, refetch} = postAPI.useFetchAllPostsQuery(limit);
    const [createPost, {}] = postAPI.useCreatePostMutation();
    const [deletePost, {}] = postAPI.useDeletePostMutation();
    const [updatePost, {}] = postAPI.useUpdatePostMutation();
    //Pooling interval передается с лимитом в данном случае и указывается чепез какой промежуток времени отправить запрос вновь
    const addPostHandler = async () => {
        const title = prompt();
        await createPost({
            title: title,
            body: title,
        } as IPost)
    };

    const updatePostHandler = (post: IPost) => {
        updatePost(post);
    };

    const deletePostHandler = (post: IPost) => {
        deletePost(post);
    };

    //     , [])
    return (
        <div className={'post__list'}>
            <button onClick={() => refetch()}>REFETCH</button>
            <button onClick={addPostHandler}>Добавить пост</button>
            {
                isError ? <h1>Error</h1> :
                    isLoading ? <h1>Идет загрузка!</h1> :
                        posts && posts.map(post => <PostItem updatePost={updatePostHandler}
                                                             deletePost={deletePostHandler} post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostContainer;