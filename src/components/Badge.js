import React from 'react';
import logoBadge from '../images/logo.png';
import './styles/Badge.css';

class Badge extends React.Component {
    render() {
        return (
            <div className='Badge'>
                <div className='Badge__header'>
                    <img src={logoBadge} alt="logo del rest" />
                </div>

                <div className='Badge__section-name'>
                    <h1>{this.props.firstName} <br/> {this.props.lastName}</h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.phone}</div>
                </div>

                <div className="Badge__footer">#restful</div>
            </div>
        )
    }
}

export default Badge;