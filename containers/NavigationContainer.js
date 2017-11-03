import { connect } from 'react-redux';

import Navigation from '../components/Navigation';

import { actions } from '../modules/posts';

const mapStateToProps = (state) => ({
    isPostModalOpen: state.posts.ui.isPostModalOpen
});

const mapDispatchToProps = {
    openPostModal: actions.openPostModal,
    closePostModal: actions.closePostModal,
    addPost: actions.addPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
