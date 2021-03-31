import React, { Component } from 'react'
import classnames from 'classnames';
export default class InputText extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor = { this.props.id } >{ this.props.label }</label>
                <input 
                    id          = { this.props.id }
                    className   = { classnames ("form-control",{'is-invalid' : this.props.error})}
                    type        = { this.props.type } 
                    name        = { this.props.name } 
                    value       = { this.props.value } 
                    onChange    = { this.props.onChange }
                />
                <div className="invalid-feedback"> { this.props.error } </div>
            </div>
        )
    }
}

