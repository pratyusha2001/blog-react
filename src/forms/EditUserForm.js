import React, { useState, useEffect } from 'react'

/*display to update blog*/
const EditUserForm = (props) => {
  const [body, setBlog] = useState(props.CurrentBody)
  
useEffect(() => {
    setBlog(props.CurrentBody)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setBlog({ ...body, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateBlog(body.id, body)
      }}
    >
      <label id="title">Title</label>
      <input
        type="text"
        name="title"
        value={body.title}
        onChange={handleInputChange}
      />
      <label id="content">Content</label>
      <input
        type="text"
        name="content"
        value={body.content}
        onChange={handleInputChange}
      />
      <br></br>
      <button class="editBtn">Update</button>
      <br></br>
      <button class="cancelBtn"onClick={() => props.setEditing(false)}>Cancel</button>
    </form>
  )
}

export default EditUserForm