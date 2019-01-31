import React from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native'
import { Text, Container, View, Content, Button } from 'native-base';
import sapiReducer from '../reducers/sapiReducer';
import { deleteData } from '../actions';
import Post from './DataRender'

function DataList({ posts, onDelete }) {
    console.log('ini',posts)
    return(
        <Content>
            {
                posts.map((post, index)=>
                    <Post post={post} onDelete={ onDelete } key={index} />
                )
            }
        </Content>
    )
}

const mapStateToProps = state => {
    return { 
        posts: state.posts
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onDelete: id => {
            dispatch(deleteData(id));
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DataList);
