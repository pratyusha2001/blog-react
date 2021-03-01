import React, { useState } from 'react'
import UserTable from './tables/UserTable'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import './App.css'


const App = () => {
  const usersData=[
    {id:1, title:'Blog1',content:'Content1'},
    {id:2, title:'Blog2',content:'Content2'},
    {id:3, title:'Blog3',content:'Content3'}
  ]

  const [blog, setBlog] = useState(usersData)
/*To add blog*/
  const addBlog = (body) => {
    body.id = blog.length + 1
    setBlog([...blog, body])
  }
/*To delete blog*/
  const deleteBlog = (id) => {
    setBlog(blog.filter((body) => body.id !== id))
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, title: '', content: '' }
  const [CurrentBody, setCurrentBody] = useState(initialFormState)
  const editBlog = (body) => {
    setEditing(true)
  
    setCurrentBody({ id: body.id, title: body.title, content: body.content })
  }
/*to update blog*/
  const updateBlog = (id, updatedBlog) => {
    setEditing(false)
  
    setBlog(blog.map((body) => (body.id === id ? updatedBlog : body)))
  }

  return (
    <div id="body" class="container-fluid">
      <h1>Blog</h1>
      <div>
        <div>
          {editing ? (
            <div>
							<h2>Edit Blog</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								CurrentBody={CurrentBody}
								updateBlog={updateBlog}
							/>
						</div>
					) : (
						<div>
							<h2 class="HeaderAdd">Add your Blog</h2>
							<AddUserForm addBlog={addBlog} />
						</div>
					)}
        </div>
        <div>
          <h2 class="HeaderView">View your blog</h2>
          <UserTable blog={blog} editBlog={editBlog} deleteBlog={deleteBlog} />
        </div>
      </div>
    </div>
  )
}

export default App;
