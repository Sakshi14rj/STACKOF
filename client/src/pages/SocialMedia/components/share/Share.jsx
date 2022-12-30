import "./share.css";
import {
  PermMedia,
  Label,
  Room,
  EmojiEmotions,
  Cancel,
} from "@mui/icons-material";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import {useSelector} from 'react-redux'
import Avatar from '../../../../components/Avatar/Avatar'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material';
export default function Share() {
  const User = useSelector((state) => (state.currentUserReducer))
  const PF = '../../assets/';
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: User?.result?._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post(process.env.REACT_APP_NODE_JS+"upload", data);
      } catch (err) {}
    }
    try {
      await axios.post(process.env.REACT_APP_NODE_JS+"posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
        {User === null ?
                    <Link to='/Auth' className='nav-item nav-links'>Log in</Link>
                        :
                    <>
                        <Avatar
                            backgroundColor='#009dff'
                            px='10px' py='7px'
                            borderRadius='50%'
                            color='white'
                        >
                            <Link to={`/Users/${User?.result?._id}`} style={{color:'white',textDecoration:'none'}}>
                                {User?.result?.name.charAt(0).toUpperCase()}
                            </Link>
                        </Avatar>
                    </> 
                    }
          <input
            placeholder={"What's in your mind " + User?.result?.name + "?"}
            className="shareInput"
            ref={desc}
          />
        </div>
        <hr className="shareHr" />
        {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )}
        <form className="shareBottom" onSubmit={submitHandler}>
          <div className="shareOptions">
            <label htmlFor="file" className="shareOption">
              <PermMedia htmlColor="tomato" className="shareIcon" />
              <span className="shareOptionText">Photo or Video</span>
              <input
                style={{ display: "none" }}
                type="file"
                id="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className="shareOption">
              <Label htmlColor="blue" className="shareIcon" />
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <Room htmlColor="green" className="shareIcon" />
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
              <span className="shareOptionText">Feelings</span>
            </div>
          </div>
          <button className="shareButton" type="submit">
            Share
          </button>
        </form>
      </div>
    </div>
  );
}
