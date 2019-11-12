import React from 'react'

class BadgeForm extends React.Component {
    // state = {
    //     jobTitle: 'Designer'
    // }

    // handleChange = e => {
    //     // console.log( { 
    //     //     name: e.target.name,
    //     //     value: e.target.value } );

    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     })
    // };
    
    handleClick = e => {
        console.log("button was clicked")
    }

    // handleSubmit = e => {
    //     e.preventDefault();
    //     console.log("Submit was send");
    //     console.log(this.state);
    // }

    render() {
        return(
            <div>
                <form onSubmit={ this.props.onSubmit }>
                    <div className="form-group">
                        <label>First Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="firstName"
                            value={this.props.formValues.firstName}  //valores controladados
                        />
                        
                        <label>Last Name</label>
                        <input 
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="lastName"
                            value={this.props.formValues.lastName}
                        />
                        
                        <label>Job Title</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="jobTitle"
                            value={this.props.formValues.jobTitle}
                        />
                        
                        <label>Teléfono</label>
                        <input
                            onChange={this.props.onChange}
                            className="form-control"
                            type="text"
                            name="phone"
                            value={this.props.formValues.phone}  
                        />
                    </div> 
                    
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>

                    {this.props.error && (
                        <p className="text-danger" >{this.props.error.message}</p>
                    )}
                </form>
            </div>
        ) 
    }   
}

export default BadgeForm