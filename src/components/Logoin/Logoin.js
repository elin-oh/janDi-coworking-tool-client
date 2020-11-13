import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
//import { Test } from './Logoin.styles';

class Logoin extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  componentWillMount = () => {
    console.log('Logoin will mount');
  }

  componentDidMount = () => {
    console.log('Logoin mounted');
  }

  componentWillReceiveProps = (nextProps) => {
    console.log('Logoin will receive props', nextProps);
  }

  componentWillUpdate = (nextProps, nextState) => {
    console.log('Logoin will update', nextProps, nextState);
  }

  componentDidUpdate = () => {
    console.log('Logoin did update');
  }

  componentWillUnmount = () => {
    console.log('Logoin will unmount');
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return (
      <div className="LogoinWrapper">
        Test content
      </div>
    );
  }
}

Logoin.propTypes = {
  // bla: PropTypes.string,
};

Logoin.defaultProps = {
  // bla: 'test',
};

export default Logoin;
