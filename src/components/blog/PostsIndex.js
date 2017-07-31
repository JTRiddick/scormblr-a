import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';

import style from '../../sass/style.scss';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    // console.log("Posts Index props : ", this.props);
    return _.map(this.props.posts, post =>{
      return (
        <li className="list-group-item" key={post._id}>
          <Link to={`/posts/${post._id}`}>
            {post.title}
          </Link>
          <div>
            {post.body}
          </div>
        </li>
      );
    });
  }

  render(){

    if (this.props.user.errorMessage){
      return (
        <div>
          <p>{this.props.user.errorMessage}</p>
        </div>
      )
    }else{
      return (
        <div>
          <div className="text-xs-right">
            <Link className="btn btn-primary" to="/posts/new">
              Add a Post
            </Link>
          </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
        </div>
      );
    }

  }
}

function mapStateToProps(state){
  return {
    posts:state.posts,
    user:state.user
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
