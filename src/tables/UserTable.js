import React from 'react'

/*table to view blog*/
const UserTable = (props) => (
  <table id="tab" class="center">

      <tr id="header">
        <th>Title</th>
        <th>Content</th>
        <th>Actions</th>
      </tr>
        {props.blog.length>0?(
            props.blog.map((body)=>(
        <tr key={body.id}>
        <td>{body.title}</td>
        <td>{body.content}</td>
        <td>
        <button id="btn" onClick={() => {props.editBlog(body)}}>Edit</button>
          <button id="btn" onClick={() => props.deleteBlog(body.id)}>Delete</button>
        </td>
      </tr>
      ))
      ) : (
        <tr>
        <td>No blog available</td>
        </tr>
    )}
  </table>
)

export default UserTable