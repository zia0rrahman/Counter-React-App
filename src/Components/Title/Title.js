import React, { Component } from 'react';

class Title extends Component {
    constructor(props){
        super(props);

        this.state = {
            title : 'This is a title',
            isInput : false,
        }
    }


    editTitle(){
        this.setState({
            ...this.state,
            isInput: true,
        })
    }

    // e means event
    inputChange(e){
        this.setState({
            ...this.state,
            title: e.target.value,
        })        
    }

    onKeyPressHandler(e){
        if(e.key === 'Enter'){
            this.setState({
                ...this.state,
                isInput: false,
            })
        }
    }

    blurHandler(e){
        this.setState({
            ...this.state,
            isInput: false,
        })
    }

  render() {
    let output = null;

    if(this.state.isInput){
        output = (
            <div>
                <input 
                className="form-control"
                //event
                onChange={ (e) => this.inputChange(e) } //method decler
                onKeyPress={ e => this.onKeyPressHandler(e) }
                onBlur= { e => this.blurHandler(e) } 
                type="text" 
                value={this.state.title}/>
            </div>
        );
    }else{
        output = (
            <div className="d-flex">
                <h2 className="mr-5">{this.state.title}</h2>
                <span onClick={ () => this.editTitle() } className="mt-2 edit-icon"><i className="fas fa-pencil-alt"></i></span>
            </div>
        );
    }

    return (
      <div>
        { output }
      </div>
    )
  }
}

export default Title;
