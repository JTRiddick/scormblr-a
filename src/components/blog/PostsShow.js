import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../../actions';

import style from '../../sass/style.scss';

class PostsShow extends Component{

  componentDidMount(){
    //check for posts
    if(!this.props.post){
      const otherId = this.props.match.params.id;
      const { id } = this.props.match.params;

      // console.log('posts show props', this.props);
      // console.log('posts show { id } ',id)
      // console.log('posts show id ',otherId);

      this.props.fetchPost(id);
    }
  }

  onDeleteClick(){
    const { id } = this.props.match.params;
    this.props.deletePost(id, () => {
      this.props.history.push('/Posts');
    });
  }

  render(){
    const { post } = this.props;
    const { user } = this.props;
    let deleteButton;
    if(!post){
      return <div>Loading...</div>
    }
    if (user.currentUser && post.author === user.currentUser._doc.username){
     deleteButton = <button
          className = "btn btn-danger pull-xs-right"
          onClick = {this.onDeleteClick.bind(this)}
          >
            Delete Post
          </button>
    }
    return(<div>
      <Link className="btn btn-primary" to="/">Back to Index</Link>
        {deleteButton}
        <h3>{post.title}</h3>
        <h6>By: {post.author} </h6>
        <h6>Categories: {post.categories}</h6>
        <p>{post.body}</p>
    </div>);
  }
}

const mapStateToProps = ({posts, user},ownProps ) =>{
  console.log('posts show mapStateToProps ', {posts,user});
  return {
    post: posts[ownProps.match.params.id],
    user: user
  };
}

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostsShow);
