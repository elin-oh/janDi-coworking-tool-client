import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { generateJandi } from 'modules/generateDayBlock';
import JandiHana from 'components/JandiHana';
import classNames from 'classnames/bind';
import styles from './JandiGround.scss';

const cx = classNames.bind(styles);

class JandiGround extends PureComponent {

  constructor(props) {
    super(props)
    let JandiDayList = generateJandi();
    this.state = {
      jandiDay: JandiDayList,
      todoLists: [{
        "2020-10-30": 8,
        "2020-11-01": 2
      }]
    }
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className={cx('JandiGroundWrapper')}>
        {
          this.state.jandiDay &&
          this.state.jandiDay.map(item => {
            if (this.state.todoLists[0][item]) {
              return (<JandiHana dataKey={item} key={item} count={this.state.todoLists[0][item]} />)
            } else {
              return (<JandiHana dataKey={item} key={item} />)
            }

          })
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  // blabla: state.blabla,
});

const mapDispatchToProps = dispatch => ({
  // fnBlaBla: () => dispatch(action.name()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JandiGround);


