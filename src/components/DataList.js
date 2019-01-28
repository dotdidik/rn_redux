import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Text, Container } from 'native-base';
class DataList extends Component {
    render() {
        console.log('hay', this.props.posts)
        return(
            <Container>
                {
                    this.props.posts.map((post, index)=>
                        <Text key={index}>
                            {post.title}
                        </Text>
                    )
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { posts: state.posts };
};

export default connect(
    mapStateToProps,
    )(DataList);
