import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Client.css'
import { Consumer } from './Context';
export default class Client extends Component {
    async deleteClick(id,dispatch){
        const res = await axios.delete('https://jsonplaceholder.typicode.com/users/' + id);
        dispatch({
            type    : 'Delete',
            payload : id
        });
    }
    render() {
        const {id, name, email, username } = this.props.data;
        return (
            <Consumer>
                { value => {
                    const { dispatch } = value;
                    return (
                        <tr>
                            <td>{ name }</td>
                            <td>{ email }</td>
                            <td>{ username }</td>
                            <td>
                                <i 
                                    className="fa fa-trash-o" 
                                    aria-hidden="true"
                                    onClick= {this.deleteClick.bind(this,id,dispatch)}
                                ></i>
                                <Link to={`/Editer/${id}`}>
                                    <i class="fa fa-pencil" aria-hidden="true"></i>
                                </Link>
                            </td>
                        </tr>
                    )
                }}
            </Consumer>
        )
    }
}
