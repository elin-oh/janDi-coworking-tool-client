import React, { Component } from "react";
import Facebooklogin from 'react-facebook-login'


class Fblogin extends Component {
  state = {
    isLoggedIn: false,
    userId: '',
    name: '',
    email: '',
  }


  responsFacebook = (response) => {
    console.log(response);

    this.setState({
      isLoggedIn: true,
      userId: response.userID,
      name: response.nmae,
      email: response.email
    })
  }

  componentDidCliked = () => console.log("clicked")


  render() {

    let fbContent;

    if (this.state.isLoggedIn) {
      //로그인한 이용자의 내용이 나와야한다.
      // fbContent = (console.log(this.state),
      //     < div className="loggedIn" >
      //         <h2>Welcom {this.state.name}</h2>
      // Email: {this.state.email}
      //     </div >
      // )
      //this.props.history.push("/Mypage")

    } else {
      //로그인 버튼 추가
      fbContent = (<Facebooklogin
        appId="381700876507098"
        autoLoad={true}
        fields="name,email"
        onClick={this.componentDidCliked}
        callback={this.responsFacebook}
        textButton="hello"
        language="ko_KR"
      />)
    }
    return (
      <div>{fbContent}</div>
    )
  }
}

export default Fblogin;