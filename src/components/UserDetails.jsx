import React from 'react'

const UserDetails = ({ userdata, open, id }) => {
    return (
        <>
            {userdata.id === id ?
                <div className={open ? "accordian-container" : "close"} >
                    <div className="accordian-user-details">
                        <div className="accordian-right">
                            <div className="accordion-contact-container">
                                <span className="contact">contact person</span>
                                <span>{userdata.name}</span>
                            </div>
                            <div className="accordion-contact-container">
                                <span className="contact">Email</span>
                                <span>{userdata.email}</span>
                            </div>
                            <div className="accordion-contact-container">
                                <span className="contact">Phone</span>
                                <span>{userdata.phone}</span>
                            </div>
                        </div>
                        <div className="accordian-right">
                            <div className="accordion-contact-container">
                                <span className="contact">Address</span>
                                <span>{userdata.address.street}, {userdata.address.city}</span>
                            </div>
                            <div className="accordion-contact-container">
                                <span className="contact">City</span>
                                <span>{userdata.address.city}</span>
                            </div>
                            <div className="accordion-contact-container">
                                <span className="contact">State</span>
                                <span>{userdata.address.city}</span>
                            </div>
                        </div>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default UserDetails
