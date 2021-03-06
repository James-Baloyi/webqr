import React, { Component } from 'react'
import axios from "axios";

import { connect } from "react-redux";
import { fetchPosts } from "../actions/postActions";

class Posts extends Component {

    componentWillMount() {
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {

        const { posts } = this.props;

        return (
            <div>
                <h1>Posts</h1>

                {posts.map(post => {
                    return (<div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>);
                })}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts);
