import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';
import { Panel } from 'react-bootstrap';

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

  newPostClick(){
    if (this.props.user.currentUser !== null){
      return(
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
      )
    }
  }

  render(){
    // if we were dumped back here after a bad request...
    if (this.props.user.errorMessage){
      return (<div className={`container ${style.denied}`}>
          <Panel header="There's a Problem!" bsStyle="danger">
            {this.props.user.errorMessage}
          </Panel>
        </div>)
    }else{
      return (
        <section id={style.postsIndex}>
          <div className={style.postsHeader}>
            <h3>Posts</h3>
          </div>
          <div className={style.postsList}>
            <ul className="list-group">
              {this.renderPosts()}
            </ul>
          </div>
          <div>
            {this.newPostClick()}
          </div>
        </section>
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
