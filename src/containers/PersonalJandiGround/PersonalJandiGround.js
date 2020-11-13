import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './PersonalJandiGround.scss';
import JandiHana from 'components/JandiHana'

const cx = classNames.bind(styles);

class PersonalJandiGround extends Component {
  render() {
    const jandiList = [];

    let comCount = 0;
    let totalCount = 0;
    let percentLen;
    if (this.props.todoCount) {
      comCount = this.props.todoCount[0];
      totalCount = this.props.todoCount[1];
      percentLen = Math.floor((comCount / totalCount) * 30);
    }
    for (let i = 0; i < 30; i++) {
      if (i <= percentLen) {
        jandiList.push(<JandiHana count="5" key={i} />)
      } else {
        jandiList.push(<JandiHana count="0" key={i} />)
      }

    }
    return (
      <div className={cx('PersonalJandiGroundWrapper')}>
        <div className={cx('PersonalJandiGround')}>
          {
            jandiList.length > 0 ? jandiList : null
          }
        </div>
      </div>
    );
  }
}

export default PersonalJandiGround;
