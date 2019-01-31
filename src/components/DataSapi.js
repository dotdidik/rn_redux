import React, { Component } from 'react';
import { connect } from 'react-redux';

import { View } from 'react-native'
import { Text, Container } from 'native-base';
class DataSapi extends Component {
    render() {
        console.log('sapi', this.props.sapis)
        return(
            <Container>
                {
                    this.props.sapis.map((sapi, index)=>
                        <Text key={index}> {sapi.nama} </Text>
                    )
                }
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return { sapis: state.sapis };
};

export default connect(
    mapStateToProps,
    )(DataSapi);
