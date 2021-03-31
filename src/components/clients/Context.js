import axios from 'axios';
import React, { Component } from 'react'
const Context = React.createContext();
export class Provider extends Component {
    constructor(props){
        super(props);
        this.state = {
            clients : [
                { id: 1 , name: 'Aarchi Ayoub' , email: 'ayoubaa084@gmail.com' , username: '0609019455' },
                { id: 2 , name: 'Aarchi jamal' , email: 'jamalaar@gmail.com' , username: '0661606161' },
                { id: 3 , name: 'Boujnane Zineb' , email: 'bjnzizou@gmail.com' , username: '0660616012' }
            ],
            dispatch : action => this.setState( state => this.reducer(state,action))
        }
    }
    reducer(state,action){
        switch(action.type){
            case 'Delete' : {
                return { clients : state.clients.filter((c) => c.id !== action.payload) };
            };
            case 'Create' : {
                return { clients : [action.payload, ...state.clients] };
            };
            case 'Update' : {
                return { clients : state.clients.map((c) => c.id === action.payload.id ? c = action.payload : c) };
            };
            default : return state.clients;
        }
    }
    async componentDidMount(){
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        this.setState({
            clients : res.data
        })
    }
    render() {
        return (
            <Context.Provider value = {this.state}>
                { this.props.children }
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;
