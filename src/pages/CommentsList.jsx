import React, { Component } from 'react';
import ReactTable from 'react-table';
import api from '../api/comment';

import styled from 'styled-components';

import 'react-table/react-table.css';

const Wrapper = styled.div`padding: 0 40px 40px 40px`;
const Update = styled.div`color: #ef9b0f; cursor: pointer`;
const Delete = styled.div`color: #ff0000; cursor: pointer`;

class UpdateComment extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/comments/update/${this.props.id}`
    };

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    };
};

class DeleteComment extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (window.confirm(`Do you want to delete this comment ${this.props.id} permanently?`)) {
            api.deleteCommentById(this.props.id)
            window.location.reload()
        }
    };

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    };
};

class CommentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            comments: [],
            columns: [],
            isLoading: false,
        };
    };

    componentDidMount = async () => {this.setState({ isLoading: true })

        await api.getAllComments().then(comments => {
            this.setState({
                comments: comments.data.data,
                isLoading: false,
            })
        })
    };

    render() {
        const { comments, isLoading } = this.state

        const columns = [
            {
                Header: 'Author',
                accessor: 'author',
                filterable: true,
            },
            {
                Header: 'Date of create',
                accessor: 'dateOfCreate',
                filterable: true,
            },
            {
                Header: 'content',
                accessor: 'content',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteComment id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateComment id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        //if (!comments.length) {showTable = false}

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={comments}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        );
    };
};

export default CommentsList;
