import React from 'react';

import './Post.css';
import Comment from './Comment';

const Post = ({ author, date, content, comments }) => (
  <section className="post">
    <div className="post__author">
      <img alt={author.name} src={author.avatar} title={author.name} />
      <div className="post__author__info">
        <h2>{author.name}</h2>
        <p>{date}</p>
      </div>
    </div>
    <p className="post__content">{content}</p>
    {comments.length > 0 && (
      <ul className="post__comments">
        {comments.map(comment => <Comment key={comment.id} {...comment} />)}
      </ul>
    )}
  </section>
)

export default Post;
