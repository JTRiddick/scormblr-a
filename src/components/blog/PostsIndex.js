import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../../actions';
import { Panel } from 'react-bootstrap';

import { PostsShow } from './PostsShow.js';

import style from '../../sass/style.scss';

class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts(posts){
    console.log('renderPosts posts =>?,', posts);
    if (Object.keys(posts).length === 0) {
      return (<div className={`container ${style.denied}`}>
        <Panel header="There's a Problem!" bsStyle="danger">
          <p>No Posts</p>
        </Panel>
      </div>)
    }else{
      return _.map(posts, post =>{
        return (
          <PostIndexItem post={post} key={post._id}/>
        );
      });
    }
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
    console.log('posts index posts @ render: ', this.props.posts);
    // if we were dumped back here after a bad request...
    if (this.props.user.errorMessage){
      return (<div className={`container ${style.denied}`}>
          <Panel header="There's a Problem!" bsStyle="danger">
            {this.props.user.errorMessage}
          </Panel>
        </div>)
    }
  else{
    return (<div>
      <section id={style.postsIndex}>
        <div className={style.postsHeader}>
          <h3>Posts</h3>
        </div>
        <div className={style.postsList}>
          <ul className="list-group">
            {this.renderPosts(this.props.posts)}
          </ul>
        </div>
      </section>
      <div>
        {this.newPostClick()}
      </div>
    </div>);

    }
  }
}

const PostIndexItem = props => {

  const post = props.post;
  const postStyle = {
    headLink:{display:'inline-block',width:'100%'},
    prevBody:{maxWidth:'40%', display:'inline-block'},
    image:{maxWidth:'240px'}
  }
  const postImg =
    post.imageLinks[0] ? post.imageLinks[0] : '/img/placeholder.jpg';
  console.log('post index presentational ,',props,post)
  return(
    <li className="list-group-item" >
      <Link to={`/posts/${post._id}`}>
        {post.title}
      </Link>
      <div>
        <div style={postStyle.prevBody}>
        <p>{post.body}</p>
        </div>
        <div style={postStyle.prevBody}>
          <img style={postStyle.image} src={postImg}/>
        </div>
      </div>
    </li>
  )
}

function mapStateToProps(state){
  return {
    posts:state.posts,
    user:state.user
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
