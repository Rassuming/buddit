import React from 'react'
import {upVote, downVote, addComment, commentToComment} from '../actions'
import {connect} from 'react-redux'
import Main from '../components/Main'

const mapStateToProps = (state, ownProps) => {
    return { buddits: state.buddits }
}

const mapDispatchToProps = dispatch => {
    return {
        upVote: (id,name) => dispatch(upVote(id,name)),
        downVote: (id,name) => dispatch(downVote(id,name)),
        addComment: (id, comment) => dispatch(addComment(id,comment)),
        commentToComment: (id, gotComment, key) => dispatch(commentToComment(id, gotComment, key))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main)