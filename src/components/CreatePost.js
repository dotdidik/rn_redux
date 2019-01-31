import { connect } from 'react-redux';
import { createPost } from '../actions';
import AddData from '../components/AddData';

const mapDispatchToProps = dispatch => {
    return {
        onAddData: post => {
            dispatch(createPost(post));
        }
    };
};

export default connect(
    null,
    mapDispatchToProps
) (AddData);
