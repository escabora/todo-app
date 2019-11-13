import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import IconButtom from '../template/iconButton'
import { add, changeDescription, search } from './todoActions'

class TodoFrom extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentWillMount() {
    this.props.search()
  }

  keyHandler(e) {
    const { add, search, description } = this.props
    if(e.key === 'Enter') {
      e.shiftKey ? search() : add(description)
    } else if(e.key === 'Escape') {
      props.handleClear()
    }
  }

  render() {
    const { add, search, description } = this.props
    return (
      <div role="form" className="todoForm">
  
        <Grid cols='12 9 10'>
            <input id="description" className="form-control" 
              placeholder="Adicione uma task"
              onChange={this.props.changeDescription}
              onKeyUp={this.keyHandler}
              value={this.props.description}></input>
        </Grid>
    
        <Grid cols='12 3 2'>
          <IconButtom style="primary" icon="plus"
            onClick={() => add(description)}></IconButtom>
    
          <IconButtom style="info" icon="search"
            onClick={() => search()}></IconButtom>
          
          <IconButtom style="default" icon="close"
            onClick={this.props.handleClear}></IconButtom>
          </Grid>
      </div>
    )
  }
} 

const mapStatetoProps = state => ({description: state.todo.description})
const mapDispathToProps = dispath => 
  bindActionCreators({ add, changeDescription, search }, dispath)
export default connect(mapStatetoProps, mapDispathToProps)(TodoFrom)