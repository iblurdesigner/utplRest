import React from 'react'

class BadgesList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled BadgesList">
                {this.props.badges.map( (badge)=>{
                    return (
                        <li className="BadgesListItem" key={badge.id}>
                            <p>{badge.firstName} {badge.lastName}</p>
                        </li>
                    )
                })}
            </ul>    
        )
    }
}

export default BadgesList