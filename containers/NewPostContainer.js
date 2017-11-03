import { connect } from 'react-redux';

import { actions } from '../modules/posts';

import NewPost from '../components/NewPost';

const mapStateToProps = (state, props) => ({
    ...props,
    author: state.user.data.profileId
});

const mapDispatchToProps = {
    addPost: actions.addPost
}

export default connect(mapStateToProps, mapDispatchToProps)(NewPost);