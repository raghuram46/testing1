import {Component} from 'react'
import Loader from 'react-loader-spinner'

import UserItem from '../UserItem'
import './index.css'

class Home extends Component {
  state = {usersList: [], isLoading: false}

  renderLoadingView = () => (
    <div className="bg-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderUserData = () => {
    const {usersList} = this.state

    return (
      <div className="container">
        <button type="button" className="logout-button">
          Logout
        </button>
        <ul className="user-list-container">
          {usersList.map(eachUser => (
            <UserItem key={eachUser.id} userData={eachUser} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return isLoading ? this.renderLoadingView() : this.renderUserData
  }
}

export default Home
