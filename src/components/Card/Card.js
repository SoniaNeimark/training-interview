import "./Card.css"
function Card(props) {
  return (
    <>
      <h2
        className="card__title-first"
        style={{ color: "black", fontSize: "20px" }}
      >
        {props.user.name}
      </h2>
      <p className="card__text" style={{ color: "black", fontSize: "18px" }}>
        {props.user.email}
      </p>
      <p>{props.user.phone}</p>
      <details className="posts">
        <summary className="posts__title">
          <strong>Posts</strong>
        </summary>
        <ul>
          {props
            .filterByKey(props.posts, "userId", props.user.id)
            .map((post) => {
              return (
                <li key={post.id}>
                  <details
                    className="post"
                    style={{
                      margin: "10px",
                      padding: "10px",
                      border: "1px solid",
                    }}
                  >
                    <summary className="post__title">
                      <strong>{post.title}</strong>
                    </summary>
                    <p
                      style={{
                        marginBottom: "10px",
                        paddingBottom: "10px",
                        borderBottom: "1px solid",
                      }}
                    >
                      {post.body}
                    </p>
                    <details
                      className="comments"
                      style={{ paddingLeft: "20px" }}
                    >
                      <summary>
                        <strong>Comments</strong>
                      </summary>
                      <ul>
                        {props
                          .filterByKey(props.comments, "postId", post.id)
                          .map((comment) => {
                            return (
                              <li key={comment.id}>
                                <h5
                                  style={{
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  <strong>{comment.email}</strong>
                                </h5>
                                <p style={{ marginBottom: "10px" }}>
                                  {comment.body}
                                </p>
                              </li>
                            );
                          })}
                      </ul>
                    </details>
                  </details>
                </li>
              );
            })}
        </ul>
      </details>
    </>
  );
}

export default Card;

/*
props.user
props.posts
props.comments
*/
