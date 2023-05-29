import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUsers, getPosts, getComments } from "./api/api";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";

function App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchValue, setSearchValue] = useState("");

  function filterByKey(arr, key, value) {
    return arr.filter((el) => el[key] === value);
  }

  useEffect(() => {
    getUsers()
      .then((data) => setUsers(data))
      .catch((err) => {
        console.log(err.message);
        return [];
      });
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  useEffect(() => {
    getPosts()
      .then((data) => setPosts(data))
      .catch((err) => {
        console.log(err.message);
        return [];
      });
  }, []);

  useEffect(() => {
    getComments()
      .then((data) => setComments(data))
      .catch((err) => {
        console.log(err.message);
        return [];
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="main">
        <section className="search" style={{ alignContent: "auto" }}>
          <h2>Find user by</h2>
          <Form
            users={users}
            filter={filter}
            searchValue={searchValue}
            setFilter={setFilter}
            setFilteredUsers={setFilteredUsers}
            setSearchValue={setSearchValue}
            filterByKey={filterByKey}
          />
        </section>
        <section className="cards">
          <ul className="cards__list">
            {filteredUsers.map((user) => {
              return (
                <li key={user.id} className="card">
                  <Card
                    user={user}
                    posts={posts}
                    comments={comments}
                    filterByKey={filterByKey}
                  />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
/*
<form
            onSubmit={(e) => {
              e.preventDefault();
              setFilteredUsers(filterByKey(users, filter, searchValue));
            }}
          >
            <label htmlFor="name">
              <input
                type="radio"
                id="name"
                name="filter"
                onChange={() => {
                  setFilter("name");
                }}
              />
              Name
            </label>
            <label htmlFor="email">
              <input
                type="radio"
                id="email"
                name="filter"
                onChange={() => {
                  setFilter("email");
                }}
              />
              Email
            </label>
            <label htmlFor="phone">
              <input
                type="radio"
                id="phone"
                name="filter"
                onChange={() => {
                  setFilter("phone");
                }}
              />
              Phone
            </label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder={filter}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button type="submit">Find</button>
          </form>


                <li
                  key={user.id}
                  className="card"
                  style={{
                    width: "250px",
                    padding: 0,
                    border: "1px solid",
                    borderRadius: "10px",
                  }}
                >
                  <h2
                    className="card__title-first"
                    style={{ color: "black", fontSize: "20px" }}
                  >
                    {user.name}
                  </h2>
                  <p
                    className="card__text"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    {user.email}
                  </p>
                  <p>{user.phone}</p>
                  <details className="posts">
                    <summary className="posts__title">
                      <strong>Posts</strong>
                    </summary>
                    <ul>
                      {filterByKey(posts, "userId", user.id).map((post) => {
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
                                  {filterByKey(comments, "postId", post.id).map(
                                    (comment) => {
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
                                    }
                                  )}
                                </ul>
                              </details>
                            </details>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                </li>
*/
