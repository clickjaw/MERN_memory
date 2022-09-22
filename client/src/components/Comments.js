import React, { useState, useEffect } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import NewComment from './crud_comments/NewComment'
import EditComment from './crud_comments/EditComment'
import DeleteComment from './crud_comments/DeleteComment'

export default function Comments({ comments, memoryId, author, getComments, allUsers }) {
  const [isAddClicked, setIsAddClicked] = useState(false)
  const [authorUsername, setAuthorUsername] = useState('')

  const handleAddClick = () => {
    setIsAddClicked(!isAddClicked)
  }

  const matchUserToComment = () => {
    let correctAuthor = allUsers.filter(obj => obj._id === author)
    setAuthorUsername(correctAuthor[0].email.split("@")[0])
  }

  useEffect(() => {
    matchUserToComment()
  })

  return (
    <>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header style = {{fontFamily: 'Manrope'}}>Comments</Accordion.Header>
          <Accordion.Body style={{ overflowY: 'scroll', height: '100px' }}>

            {/*add comment button */}
            <div style = {{fontFamily: "Manrope", letterSpacing: "1"}}>
              <i onClick={handleAddClick}>+ New Comment</i>
            </div>

            {comments !== '' && comments.length > 1 && comments.map(com => (
              <Card key={com._id}>
                <Card.Body>
                  <Card.Title>{authorUsername}</Card.Title> {/*this will change to be user.name from auth0 user */}
                  <Card.Text>
                    {com.body}
                  </Card.Text>
                  <Card.Footer style={{display:'flex', justifyContent:'space-between'}}>
                    {/*edit comment button */}{/*delete comment button */}
                    {com.author === author && <><EditComment memoryId={memoryId} body={com.body} author={author} getComments={getComments} commentId={com._id}/> <DeleteComment getComments={getComments} commentId={com._id} /></>}
                  </Card.Footer>
                </Card.Body>
              </Card>))}

            {comments !== '' && comments.length === 1 &&
              <Card key={comments[0]._id}>
                <Card.Body>
                  <Card.Title>{authorUsername}</Card.Title>
                  <Card.Text>
                    {comments[0].body}
                  </Card.Text>
                  <Card.Footer style={{display:'flex', justifyContent:'space-between'}}>
                    {/*edit comment button */}{/*delete comment button */}
                    {comments[0].author === author && <><EditComment memoryId={memoryId} body={comments[0].body} author={author} getComments={getComments} commentId={comments[0]._id}/> <DeleteComment getComments={getComments} commentId={comments[0]._id}/></>}
                  </Card.Footer>
                </Card.Body>
              </Card>}

          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <NewComment getComments={getComments} author={author} memoryId={memoryId} handleAddClick={handleAddClick} isAddClicked={isAddClicked} />
    </>
  )
}
