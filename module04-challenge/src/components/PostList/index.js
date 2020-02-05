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
          name: 'Júlio Alcantara',
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
            content: 'A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Gabriel Lisboa',
          avatar: avatar3,
        },
        date: '04 Jun 2019',
        content: 'Fala galera, beleza?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Clara Lisboa',
              avatar: avatar4,
            },
            content: 'Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafíos construída!'
          },
          {
            id: 2,
            author: {
              name: 'Cézar Toledo',
              avatar: avatar5,
            },
            content: 'Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!'
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
