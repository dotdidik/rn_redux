import React, { Component } from 'react'
import { Container, Header, Content, Form, Item, Input, Label, Left, Text, Title, Body, Right, Button } from 'native-base';

export default class AddData extends Component {
    state = {
        title: '',
        categories: '',
        content: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.title.trim() && this.state.categories.trim() && this.state.content.trim() ){
            this.props.onAddData(this.state)
            console.log(this.state)
        }
    }

    render() {
        return (

            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Title</Label>
                  <Input onChangeText={(title) => this.setState({title}) } />
                </Item>
                <Item floatingLabel last>
                  <Label>Image Url</Label>
                  <Input onChangeText={(categories) => this.setState({categories}) }/>
                </Item>
                <Item floatingLabel last>
                  <Label>Content</Label>
                  <Input onChangeText={(content) => this.setState({content}) } />
                </Item>
                <Button onPress={this.handleSubmit}>
                    <Text>Send</Text>
                </Button>
              </Form>
              <Text>{this.state.title}</Text>
            </Content>
        );
      }
}
