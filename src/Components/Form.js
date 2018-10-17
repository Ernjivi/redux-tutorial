import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    }
}

class ConnectedForm extends Component{

    state = {
        title: ''
    }

    changeHandler = evt => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    submitHandler = evt => {
        evt.preventDefault();
        const { title } = this.state;
        const id = uuidv1();
        this.props.addArticle({title, id});
        this.setState({title: ""})
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text"
                        name="title"
                        id="title"
                        value={this.state.title}
                        onChange={this.changeHandler}/>
                </div>
                <div>
                    <button type="submit">Save</button>
                </div>
            </form>
        )
    }
}

const Form = connect(null, mapDispatchToProps) (ConnectedForm);

export default Form;