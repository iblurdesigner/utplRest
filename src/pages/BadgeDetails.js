import React from 'react'

import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import logo from '../images/logo.png'

import Badge from '../components/Badge'
import DeleteBadgeModal from '../components/DeleteBadgeModal'

function useIncreaseCount(max) {
    const [ count, setCount ] = React.useState(0)

    if(count > max) {
        setCount(0)
    }

    return [ count, setCount ]
}

function BadgeDetails (props) {
    const [ count, setCount] = useIncreaseCount(4)

    const badge = props.badge;

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={logo} alt="Logo de laconferencia" />
                        </div>

                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">

                <div className="row">
                    <div className="col-6">
                        <Badge firstName={badge.firstName} lastName={badge.lastName} jobTitle={badge.jobTitle} phone={badge.phone} />
                    </div>

                    <div className="col-6">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={ () => {
                                    setCount(count +1)
                                }} className="btn btn-primary mr-4">
                                    Increase Count: {count}
                                </button>

                                <Link to={`/badges/${badge.id}/edit`} className="btn btn-primary">Edit</Link>
                            </div>

                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger mt-4">Delete</button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen}
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails