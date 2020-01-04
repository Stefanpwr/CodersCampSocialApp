import React, { Component } from 'react';
import api from '../api/comment';

import styled from 'styled-components';

const Title = styled.h1.attrs({className: 'h1'})``;
const Wrapper = styled.div.attrs({className: 'form-group'})`margin: 0 30px;`;
const Label = styled.label`margin: 5px;`;
const InputText = styled.input.attrs({className: 'form-control'})`margin: 5px;`;
const Button = styled.button.attrs({className: `btn btn-primary`})`margin: 15px 15px 15px 5px;`;
const CancelButton = styled.a.attrs({className: `btn btn-danger`})`margin: 15px 15px 15px 5px;`;

class CommentsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            author: '',
            dateOfCreate: '',
            content: '',
        };
    };

    handleChangeInputAuthor = async event => {
        const author = event.target.value
        this.setState({ author })
    };

    handleChangeInputDateOfCreate = async event => {
        const dateOfCreate = event.target.value
        this.setState({ dateOfCreate })
    };

    handleChangeInputContent = async event => {
        const content = event.target.value
        this.setState({ content })
    };

    handleUpdateComment = async () => {
        const { id, author, dateOfCreate, content } = this.state
        const payload = { author, dateOfCreate, content }

        await api.updateCommentById(id, payload).then(res => {
            window.alert(`Comment updated successfully`)
            this.setState({
                author: '',
                dateOfCreate: '',
                content: '',
            })
        })
    };

    componentDidMount = async () => {
        const { id } = this.state
        const comment = await api.getCommentById(id)

        this.setState({
            author: comment.data.data.author,
            dateOfCreate: comment.data.data.dateOfCreate,
            content: comment.data.data.content
        })
    };

    render() {
        const { author, dateOfCreate, content } = this.state
        return (
            <Wrapper>
                <Title>Create Comment</Title>

                <Label>Author: </Label>
                <InputText
                    type="text"
                    value={author}
                    onChange={this.handleChangeInputAuthor}
                />

                <Label>Date of Create: </Label>
                <InputText
                    type="date"
                    value={dateOfCreate}
                    onChange={this.handleChangeInputDateOfCreate}
                />

                <Label>Content: </Label>
                <InputText
                    type="text"
                    value={content}
                    onChange={this.handleChangeInputContent}
                />

                <Button onClick={this.handleUpdateComment}>Add Comment</Button>
                <CancelButton href={'/comments/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    };
};

export default CommentsUpdate;