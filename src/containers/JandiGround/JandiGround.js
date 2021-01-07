import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { generateJandi } from 'modules/generateDayBlock';
import JandiHana from 'components/JandiHana';
import classNames from 'classnames/bind';
import styles from './JandiGround.scss';
import {setDate} from 'actions';
const cx = classNames.bind(styles);

class JandiGround extends PureComponent {

  constructor(props) {
    super(props)
    let JandiDayList = generateJandi();
    this.state = {
      jandiDay: JandiDayList,
      project:{}
    }
  }

  componentDidMount() { 
    
  }

  componentDidUpdate(prevProps, prevState) {
  }
  
  loadDayTodoList(item){
    this.props.setDate(item);
  }

  render() {
    return (
      <div className={cx('JandiGroundWrapper')}>
        {
          this.state.jandiDay &&
          this.state.jandiDay.map(item => {
            if(this.props.todoLists[item]){
              return (<div key={item} onClick={this.loadDayTodoList.bind(this, item)}><JandiHana dataKey={item} count={this.props.todoLists[item]} key={item} /></div>)
            }else{
              return (<JandiHana dataKey={item} key={item} />)
            }
          })
        }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  project: state.projectsReducer.project
});

const mapDispatchToProps = dispatch => ({
  setDate: (date)=> dispatch(setDate(date))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(JandiGround);


