export function Post({ post, handleDelete }) {
  const { id, title, body } = post;

  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="body">{body}</div>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
}
