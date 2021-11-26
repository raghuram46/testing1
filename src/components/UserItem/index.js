import './index.css'

const UserItem = props => {
  const {userData} = props

  return (
    <li className="user-item">
      <p className="user">User ID: {userData.userId}</p>
      <h1 className="title">{userData.title}</h1>
      <p className="body">{userData.body}</p>
    </li>
  )
}

export default UserItem
