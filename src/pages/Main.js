import React, { Component } from 'react';
import Header from 'components/Header';
import Button from 'components/Button';
class Main extends Component {
  render() {
    return (
      <div className="App-wrap">
        <div className="mb-view">
          <Header />
          <div className="App-contents">
            <h2>프로젝트 리스트</h2>
            <Button>프로젝트 생성하기</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
