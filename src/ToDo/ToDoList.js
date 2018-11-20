import React, { Component } from 'react';

class ToDoList extends Component{
    constructor(){
        super();
        this.state= 
        {
            userInput: '',
            item: []
        };
    }
    onChange(event){
        this.setState({
            userInput: event.target.value

        });
    }
    toDo(event){
        event.preventDefault();
        this.setState({
            userInput: '',
            item: [...this.state.item, this.state.userInput]
        }, ()=> console.log(this.state.item));
    }

    deleteToDo(index){
        const array= this.state.item;
        array.splice(index,1);
        this.setState ({
            item: array
        }, ()=> console.log(index));
    }

    renderToDo(){
        return(
            this.state.item.map((items,index) => {
                return (
                    <div className="list-group-item" key={index}>
                        {items} | <button onClick = {this.deleteToDo.bind(this,index)} > X </button>
                    </div>
                );
            })
        );
    }

    render(){
        return(
            <div>
                <h1 align="center"> ToDoList </h1>
                <form className="form-row align-items-center">
                <input 
                    className="input-group input-group-lg"
                    type="text" 
                    value ={this.state.userInput}   
                    placerholder="Ajouter une tâche" 
                    onChange={this.onChange.bind(this)}>
                </input>
                <br/>
                <br></br>
                <button 
                className="btn btn-primary btn-lg btn-block"
                onClick= {this.toDo.bind(this)}
                > Ajouter </button>
                <br/>
                <br></br>
                </form>
                <div className="list-group">
                    {this.renderToDo()}
                </div>

            </div>
        );

    }
}
export default ToDoList;