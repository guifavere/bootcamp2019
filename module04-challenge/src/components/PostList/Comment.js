import React from 'react';

import './Comment.css';

const Comment = ({ author, content }) => (
  <li className="post__comments__comment">
    <img alt={author.name} src={author.avatar} title={author.name} />
    <p><strong>{author.name}</strong> {content}</p>
  </li>
);

export default Comment;
