import React, { Component } from 'react';

import './Index.css';
import avatar1 from '../../assets/avatar-1.png';
import avatar2 from '../../assets/avatar-2.png';
import avatar3 from '../../assets/avatar-3.png';
import avatar4 from '../../assets/avatar-4.png';
import avatar5 from '../../assets/avatar-5.png';
import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: avatar1,
        },
        date: '04 Jun 2019',
        content: 'Pessoal alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: avatar2,
            },
            content: 'Conteúdo do comentário'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Julio Alcantara',
          avatar: avatar1,
        },
        date: '04 Jun 2019',
        content: 'Pessoal alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: avatar2,
            },
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
          }
        ]
      }
    ]
  }

  render() {
    return (
      <section className="post-list">
        {this.state.posts.map(post => <Post key={post.id} {...post} />)}
      </section>
    )
  }
}

export default PostList;
