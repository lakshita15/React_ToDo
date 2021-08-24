import "./Todo.css"
import React, { Component } from 'react'

export default class todo extends Component {
    constructor(){
        super();
        this.state={
         tasks : [
                ],
            currtask:"",
            
            edititemID: null
        }
    }
    addTodo=()=>{
        let editobj
        // console.log(this.state.edititemID);
        let id = this.state.edititemID;
        if(this.state.edititemID != null){
        editobj = this.state.tasks.find(function(obj){
            
            return obj.id == id; 
        
    })
    
    
        }
    
            if(!editobj){
            let newtaskarr = [...this.state.tasks,
                {
                        id: this.state.tasks.length+1,
                        txt:this.state.currtask
                    }]
                   
                this.setState({
                    tasks:newtaskarr,
                    currtask:"",
                    
                })}
                else{
                    let task = this.state.tasks.map((e)=>{
                        console.log(editobj);
                        console.log("#");
                        console.log(e);
                        if(editobj == e){
                            // console.log("Helo")
                            let o = {};
                            o.id = e.id;
                            o.txt = this.state.currtask;
                            console.log(o);
                            return o;
                        }
                        else{
                            return e;
                        }
                    })
                    // console.log(task)
                    this.setState({
                        tasks:task,
                        currtask:"",
                    })
                }
        
        
    }
    handleChange=(e)=>{
        let val = e.target.value;
        this.setState({
            currtask:val
        })
    }
    deleteTodo=(id)=>{
        let newarray = this.state.tasks.filter(function(obj){
            
                return obj.id != id; 
            
        })
        this.setState({
            tasks:newarray,
            
        })
    }
    editTodo=(id)=>{
        let newedititem = this.state.tasks.find((elem)=>{
            return elem.id === id
        })
        
        // console.log(newedititem);
        this.setState({
            currtask: newedititem.txt,
            edititemID:id //setinputdata(newedititem.txt)
        })
        // console.log(this.state.edititem);
    }
    render() {
       
        return (
            <div className="main">
                <div className="input-container">
                    <input 
                    value={this.state.currtask}
                    onChange={this.handleChange} 
                    type="text">
                    </input>
                    
                        <button onClick={this.addTodo}>Add</button>
                </div>
                <div className="class-list">
                    <ul>
                        {
                            this.state.tasks.map(function(taskobj){
                                return(
                                    <li key = {taskobj.txt}>
                                        <h1>{taskobj.txt}</h1>
                                        <button onClick={
                                            ()=>{
                                                this.editTodo(taskobj.id)
                                            }
                                        }>📝edit </button>
                                        <button onClick={
                                            ()=>{
                                                this.deleteTodo(taskobj.id)
                                            }
                                        }>❌ Delete</button>
                                    </li>
                                )
                            }.bind(this))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
