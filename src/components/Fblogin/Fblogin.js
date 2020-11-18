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
        } else {
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