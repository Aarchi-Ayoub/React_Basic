import React, { Component } from 'react'
import './AddClient.css'
import InputText from './InputText';
import { Consumer } from './Context';
import axios from 'axios';
export default class AddClient extends Component {
    constructor(props){
        super(props);
        this.state = {
            show    : true,
            name     : '',
            email   : '',
            username     : '',
            error   : {}
        }
    }
    Toggle = ()=>{
        this.setState({
            show : !this.state.show
        })
    }
    onchange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    add = async(dispatch,size,e)=>{
        const { name, email, username} = this.state;
        e.preventDefault();
        if(this.state.name === ''){
            this.setState({
                error : { name : 'Le nom est obligatoire !'}
            });
            return;
        }
        if(this.state.email === ''){
            this.setState({
                error : { email : 'L\'email est obligatoire !'}
            });
            return;
        }
        if(this.state.username === ''){
            this.setState({
                error : { username : 'Le téléphone est obligatoire !'}
            });
            return;
        }
        const newClients = {
                name ,
                email ,
                username 
            };
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', newClients)
        dispatch({
                type    :'Create',
                payload : res.data
        });
        this.clearInput();
        this.props.history.push('/');
    }
    clearInput(){
        document.querySelectorAll('input').forEach( elm => elm.value= '' );
        this.setState({
            name : '',
            email : '',
            username : ''
        })
        document.querySelector('input').focus();
    }
    render() {
        const { name, email, username, error } = this.state
        return (
            <Consumer>
                { value => {
                    const { dispatch } = value
                    return (
                        <div className="container mt-3">
                            <div className="card">
                                <div className="card-header">
                                    <h3>
                                        Ajouter un client :
                                        <i className="fa fa-sort-down" onClick= {this.Toggle}></i>
                                    </h3>
                                </div>
                                { ( !this.state.show) ? null :(
                                    <form onSubmit= {this.add.bind(this,dispatch, value.clients.length)}>
                                    <div className="card-body">
                                            <InputText 
                                                label = "Nom complet"
                                                id          = "nom"
                                                className   = "form-control"
                                                type        = "text" 
                                                name        = "name" 
                                                value       = { name } 
                                                onChange    = { this.onchange.bind(this) }
                                                error       = { error.name }
                                            />                         
                                            <InputText 
                                                label = "Adresse electronique"
                                                id          = "email"
                                                className   = "form-control"
                                                type        = "email" 
                                                name        = "email" 
                                                value       = { email } 
                                                onChange    = { this.onchange.bind(this) }
                                                error       = { error.email }
                                            />
                                            <InputText 
                                                label = "Pseudo"
                                                id          = "username"
                                                className   = "form-control"
                                                type        = "text" 
                                                name        = "username" 
                                                value       = { username } 
                                                onChange    = { this.onchange.bind(this) }
                                                error       = { error.username }
                                            />
                                    </div>
                                    <button className="btn btn-block btn-success">Ajouter</button>
                                    </form>
                                )}
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}
