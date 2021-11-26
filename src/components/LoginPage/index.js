import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
import Cookies from 'js-cookie'

import './index.css'

class LoginPage extends Component {
  state = {username: '', password: '', selectedFile: ''}

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = async () => {
    const {selectedFile} = this.state
    const formData = new FormData()

    formData.append('myFile', selectedFile)

    axios({
      url: '/api/upload',
      method: 'POST',
      headers: {
        authorization: 'your token',
      },
      body: formData,
    }).then(res => {
      res.json().then(result => {
        console.log(result)
      })
    })
  }

  onClickLogin = event => {
    event.preventDefault()
  }

  render() {
    const {username, password} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="bg-container">
        <form className="form-container" onSubmit={this.onClickLogin}>
          <h1 className="heading">User Login</h1>
          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={this.onChangeUsername}
            className="input"
          />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            onChange={this.onChangePassword}
            value={password}
            className="input"
          />
          <label htmlFor="file" className="label">
            UPLOAD FILE
          </label>
          <input
            id="file"
            type="file"
            onChange={this.onFileChange}
            className="input"
          />
          <button
            type="button"
            className="upload-button"
            onClick={this.onFileUpload}
          >
            Upload
          </button>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    )
  }
}

export default LoginPage
