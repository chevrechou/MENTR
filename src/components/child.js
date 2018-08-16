import React from 'react'
import TeachersByCat from '../components/TeachersByCat';

class Child extends React.Component {
  componentDidMount() {
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }
  method() {
    <TeachersByCat courseName={this.props.onRef(this)}/>
  }
  render() {
    return <h1 >Hello World!</h1>
  }
}

export default Child;
