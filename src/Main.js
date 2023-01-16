import React from "react";
import "./Main.css";
import logo from "./images/Get a new meme image.png";

export default function Main() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImg() {
    const randnum = Math.trunc(Math.random() * allMemes.length);
    setMeme(function (prevMeme) {
      return {
        ...prevMeme,
        randomImage: allMemes[randnum]["url"],
      };
    });
  }

  function getMemeText(event) {
    const { name, value } = event.target;

    setMeme(function (prevMeme) {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  console.log(meme);

  return (
    <div>
      <div className="content1">
        <div className="inputholder">
          <input
            type="text"
            placeholder="Top Text"
            className="inputfield1"
            name="topText"
            onChange={getMemeText}
            value={meme["topText"]}
          />
        </div>
        <input
          type="text"
          placeholder="Bottom Text"
          className="inputfield2"
          name="bottomText"
          onChange={getMemeText}
          value={meme["bottomText"]}
        />
      </div>

      <div className="buttonholder">
        <button className="generatebutton" onClick={getMemeImg}>
          <img src={logo} className="buttonimage" />
        </button>
      </div>
      <div className="show-meme">
        <h1 className="meme-toptext">{meme["topText"]}</h1>
        <img src={meme["randomImage"]} className="memeimage" alt="" />
        <h1 className="meme-bottomtext">{meme["bottomText"]}</h1>
      </div>
    </div>
  );
}
