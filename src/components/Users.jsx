import React, { useState, useEffect } from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import Pagination from './Pagination'
import UserDetails from './UserDetails'
const Users = () => {
    const [open, setOpen] = useState(false)
    const [userdata, setUserdata] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postsPerPage, setPostsPerPage] = useState(3)
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])

    const fetchUsers = () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    }
    const { isLoading, error, data } = useQuery('user', fetchUsers)
    if (isLoading) {
        return <h3>Loading...</h3>
    }
    if (error) {
        return <h3>something went wrong...</h3>
    }

    const userDetails = (id, item) => {
        setUserdata(item)
    }
    // get current page
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = data.data.slice(indexOfFirstPost, indexOfLastPost)

    // change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
    return (
        <div className="page">
            {currentPosts?.map((item, idx) => {
                const { username, name, address, id } = item
                return (
                    <div key={idx} className="user-container">
                        <div className="user-containe">
                            <div className="username-container">
                                <span className="username">{username}</span>
                            </div>
                            <div className="contact-container">
                                <span className="contact">contact</span>
                                <span className="contact-name">{name}</span>
                            </div>
                            <div className="contact-container">
                                <span className="contact">city</span>
                                <span className="contact-name">{address?.city}</span>
                            </div>
                            <div className="contact-container">
                                <span className="contact">state</span>
                                <span className="contact-name">{address?.street}</span>
                            </div>
                            <div className="contact-container">
                                <button onClick={() => {
                                    userDetails(idx, item);
                                    setOpen(!open)
                                }}

                                >View Details</button>
                            </div>
                        </div>
                        <UserDetails open={open} userdata={userdata} id={id} />
                    </div>
                )
            })}
            <div className="pagination-container">
                <button
                    onClick={() => setCurrentPage((page) => page - 1)}
                    disabled={currentPage === 1}
                >
                    <i className='bx bx-chevron-left bx-sm'></i>
                </button>
                <Pagination postsPerPage={postsPerPage} totalPosts={data?.data?.length} paginate={paginate} />
                <button
                    onClick={() => setCurrentPage((page) => page + 1)}
                    disabled={currentPage === 4}
                >
                    <i className='bx bx-chevron-right bx-sm'></i>
                </button>

            </div>
        </div>
    )
}

export default Users
