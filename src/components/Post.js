export function Post({ post }) {
  const { title, body } = post;
  return (
    <div>
      <h1 className="title">{title}</h1>
      <div className="body">{body}</div>
    </div>
  );
}
