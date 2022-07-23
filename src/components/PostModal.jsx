import React, { useRef, useState } from 'react'
import useSendPost from './hooks/useSendPost';
import StyledPostModal, {PostModalForm, PostModalHeader} from "./styled/PostModal.styled"

const PostModal = ({setModal}) => {
  const[value, setValue] = useState({ post: ""})
  const backgroundRef = useRef();

  const {mutate: sendPost} = useSendPost();

  return (
    <StyledPostModal ref={backgroundRef} onClick={(e) => {
      if(e.target === backgroundRef.current) setModal(false)}}>
        <PostModalForm 
          onSubmit={(e) => {
            e.preventDefault();
            const postText = value.post;

            if(postText.length > 0){
              //send post to api
              sendPost({post: postText})
            }

            setValue({post: ""})
            setModal(false) 
          }}>
            <PostModalHeader><h1>Neuer Beitrag</h1></PostModalHeader>
            <textarea
              name="post" 
              value = {value.post} 
              onChange={(e) => setValue({[e.target.name]: e.target.value})}
              maxLength="255"/>
            <sub>Zeichen übrig: {255 - value.post.length}</sub>
            <button type="submit" >
              <p>Senden</p>
            </button>
        </PostModalForm>
    </StyledPostModal>
  )
}

export default PostModal;

 