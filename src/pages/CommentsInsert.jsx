import React, { Component } from 'react';
import api from '../api/comment';

import styled from 'styled-components';

const Title = styled.h1.attrs({className: 'h1'})``;
const Wrapper = styled.div.attrs({className: 'form-group'})`margin: 0 30px`;
const Label = styled.label`margin: 5px`;
const InputText = styled.input.attrs({className: 'form-control'})`margin: 5px`;
const Button = styled.button.attrs({className: `btn btn-primary`})`margin: 15px 15px 15px 5px`;
const CancelButton = styled.a.attrs({className: `btn btn-danger`})`margin: 15px 15px 15px 5px`;

class CommentsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            content: ''
        }
    };

    handleChangeInputContent = async event => {
        const content = event.target.value
        this.setState({ content })
    };

    handleIncludeComment = async () => {
        const content = this.state;

        await api.insertComment(content).then(res => {
            window.alert(`Comment inserted successfully`)
            this.setState({
                author: '',
                dateOfCreate: '',
                content: '',
            });
        });
    };

    render() {
        const { content } = this.state
        return (
            <Wrapper>
                <Title>Create Comment</Title>

                <Label>Content: </Label>
                <InputText
                    type="text"
                    value={content}
                    onChange={this.handleChangeInputContent}
                />

                <Button onClick={this.handleIncludeComment}>Add Comment</Button>
                <CancelButton href={'/comments/list'}>Cancel</CancelButton>
            </Wrapper>
        );
    };
};

export default CommentsInsert;