import React, { useState } from 'react'

/*display to add blog*/
const AddUserForm = (props) => {
    const initialFormState = { id: null, title: '', content: '' }
    const [body, setBlog] = useState(initialFormState)
  
    const inputChange = (event) => {
      const { name, value } = event.target
  
      setBlog({ ...body, [name]: value })
    }
    return (
        <form id="form"
          onSubmit={(event) => {
            event.preventDefault()
            if (!body.title || !body.content) return
    
            props.addBlog(body)
            setBlog(initialFormState)
          }}
        >
          <label id="title">Title</label>
          <input
            type="text"
            name="title"
            value={body.title}
            onChange={inputChange}
          />
          <br></br>
          <br></br>
          <label id="content">Content</label>
          <input
            type="text"
            name="content"
            value={body.content}
            onChange={inputChange}
          />
          <br></br>
          <button class="addBtn">Add</button>
        </form>
      )
    }
    
    export default AddUserForm