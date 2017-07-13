import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case FETCH_POSTS:
      // console.log('Get posts action payload (in reducer) :', action.payload);
      // return _.mapKeys(action.payload.data,'id');
      return Object.assign({},state,action.payload.data);
    default:
      return state;
  }
}
