import React, {Component} from 'react';

class Test extends Component {
  state = {
    test: 'test'
  };
  componentDidMount() {
    // + Выполняйте сайд-эффекты (Вызовы AJAX и т.д.)

    // - Не вызывайте this.setState т.к. это вызовет перерисовку.
    console.log('componentDidMount...');
  }


  componentWillMount() {
    // Обновляйте состояние через this.setState
    // Выполняйте последние оптимизации
    // Вызывайте сайд-эффекты (Вызов AJAX и т.д.)
    // только в случае server-side-rendering.

    // Не выполняйте никаких сайд-эффектов
    // (Вызов AJAX и т.д.) на стороне клиента.
    console.log('componentWillMount...');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate...', prevProps, prevState );
  }
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate...', nextProps, nextState );
  }
  // componentWillRecieveProps(nextProps, nextState) {
  //   // Синхронизируйте состояние (state) с props
  //   // Не выполняйте никаких сайд-эффектов (Вызовы AJAX и т.д.)
  //   console.log('componentWillRecieveProps...');
  // }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps...', nextProps, prevState);
    return {
      test: 'something'
    };
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate...');
  }

  render() {
    return (
      <div>
        <h1 className="display-4"><span className="text-danger">Test</span> Component</h1>
      </div>
    );
  }
}

export default Test;