import React from 'react';

import './styles/BadgeNew.css'
import hero from '../images/hero.jpg'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import api from '../api'
import PageLoading from '../components/PageLoading';
// import GravatarUrl from '../components/GravatarUrl';

class BadgeNew extends React.Component {
    state= {
        loading: false,
        error: null,
        form:{
            firstName: '',
            lastName: '',
            jobTitle: '',
            phone: '',
            // avatarUrl: '', 
        }
    };

    handleChange = e => {
        this.setState ({
            form: {
                ...this.state.form,
                [e.target.name] : e.target.value,
            }
        })
    }
    
    // handleChange = async e => {
    //     await this.setState ({
    //         form: {
    //             ...this.state.form,
    //             [e.target.name] : e.target.value,

    //             avatarUrl: GravatarUrl(this.state.form.email)
    //         }
    //     })
    // }

    handleSubmit = async e => {
        e.preventDefault()
        this.setState({ loading: true,  error: null })

        try{
            await api.badges.create(this.state.form)
            this.setState({ loading: false })

            this.props.history.push('/badges')
        } catch (error) {
            this.setState({ loading: false,  error: error })
        }
    }

    render() {

        if(this.state.loading) {
            return <PageLoading />
        }

        return (
            <React.Fragment>
                <div>
                    <img className="img-fluid" src={hero} alt="logo" />
                </div>

                <div className="container separacion">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                phone={this.state.form.phone || 'PHONE'}
                                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <h1>Ingrese su cédula</h1>
                            <BadgeForm 
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }        
}

export default BadgeNew;