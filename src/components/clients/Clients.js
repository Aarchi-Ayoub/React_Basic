import React, { Component } from 'react'
import Client from './Client';
import { Consumer } from './Context';

export default class Clients extends Component {
    render() {
        return (
            <Consumer>
                { value => (
                    <div className="container">
                        <h3 className="mt-2">Liste des clients :</h3>
                        <div>
                            <table className="table mt-3">
                            <thead>
                                <tr>
                                    <th scope="col">Nom complet</th>
                                    <th scope="col">Adresse éléctronique </th>
                                    <th scope="col">Pseudo</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    value.clients.map((client)=>(
                                        <Client  data={client} key={client.id}/>
                                    ))
                                }
                            </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </Consumer>
        )
    }
}
