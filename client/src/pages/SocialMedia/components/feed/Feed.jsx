import {  useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import {useSelector} from 'react-redux'
export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const User = useSelector((state) => (state.currentUserReducer))

  useEffect(() => {
    console.log(User?.result?._id);
    const fetchPosts = async () => {
      const res = User?.result?.name
        ? await axios.get(process.env.REACT_APP_NODE_JS+"posts/profile/" + User?.result?.name)
        : await axios.get(process.env.REACT_APP_NODE_JS+"posts/timeline/" + User?.result?._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [User?.result?.name, User?.result?._id]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(User?.result?.name ) && <Share />}
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
