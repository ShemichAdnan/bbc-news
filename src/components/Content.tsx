import { useState, useRef } from "react";
import { FaPlus } from "react-icons/fa";

const Content = () => {
  let first = {
    subject: "Frenchman planned attacks in Euro 2016",
    description:
      "A Frenchman detained with a large cache od arms was planning mass attacks",
    category: "EUROPE",
    picture:
      "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/ED66/production/_89847706_033223315-1.jpg",
  };
  let second = {
    subject: "Donald Trump's Hispanic voter doomsday",
    description: "",
    category: "US ELECTION 2016",
    picture:
      "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/0F6D/production/_89894930_gettyimages-537766762.jpg",
  };
  let third = {
    subject: "When Saudi women marry foreigners",
    description: "",
    category: "TRENDING",
    picture:
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/10227/production/_89878066_gettyimages-161615179.jpg.webp",
  };
  let fourth = {
    subject: "Google bans secret signal plug- in that picks out Jews",
    description: "",
    category: "TECHNOLOGY",
    picture:
      "https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/7B51/production/_89896513_thinkstockphotos-200248395-001.jpg.webp",
  };
  let fifth = {
    subject: "King Arthur's wild island",
    description: "",
    category: "TRAVEL",
    picture: "https://ychef.files.bbci.co.uk/1280x720/p03x1h5w.jpg",
  };

  let started = [first, second, third, fourth, fifth];

  const [visible, setVisible] = useState(false);
  const [news, setNews] = useState(started);
  const [input, setInput] = useState({
    subject: "",
    description: "",
    category: "",
    picture: "",
  });
  const addingNew = () => {
    setInput({
      subject: input.subject,
      description: input.description,
      category: input.category,
      picture: input.picture,
    });
    if (
      input.subject != "" &&
      input.description != "" &&
      input.category != "" &&
      input.picture != ""
    ) {
      setNews([input, ...news]);
      setVisible(false);
      input.subject=""
    }
  };

  const handleInputChange = (event: any) => {
    const { id, value } = event.target;
    setInput((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };
  return (
    <div id="content">
      {visible && (
        <div id="popalert">
          <div id="box">
            <h1>Add news</h1>
            <label htmlFor="subject">Subject: </label>
            <input
              type="text"
              id="subject"
              maxLength={40}
              value={input.subject}
              onChange={handleInputChange}
              placeholder="(max 40)"
            />
            <label htmlFor="description">Description: </label>
            <textarea
              id="description"
              placeholder="(max 80)"
              maxLength={80}
              value={input.description}
              onChange={handleInputChange}
              aria-disabled
            />
            <label htmlFor="category">Category: </label>
            <input
              type="text"
              id="category"
              placeholder="(max 25)"
              maxLength={25}
              value={input.category}
              onChange={handleInputChange}
            />
            <label htmlFor="picture">Picture: </label>
            <input
              type="text"
              id="picture"
              placeholder="link"
              value={input.picture}
              onChange={handleInputChange}
            />
            <div id="btns">
              <button id="addBtn" onClick={() => addingNew()}>
                Add
              </button>
              <button id="addBtn" onClick={() => setVisible(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <div
        id="first"
        style={{
          backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${news[0].picture})`,
          backgroundSize: "cover",
        }}
      >
        <h1>{news[0].subject}</h1>
        <h3>{news[0].description}</h3>
        <h3>{news[0].category}</h3>
      </div>
      <div id="right">
        <div id="frow">
          <div
            id="second"
            style={{
              backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${news[1].picture})`,
              backgroundSize: "cover",
            }}
          >
            <h1>{news[1].subject}</h1>
            <h3>{news[1].category}</h3>
          </div>
          <div
            id="third"
            style={{
              backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${news[2].picture})`,
              backgroundSize: "cover",
            }}
          >
            <h1>{news[2].subject}</h1>
            <h3>{news[2].category}</h3>
          </div>
        </div>
        <div id="srow">
          <div
            id="fourth"
            style={{
              backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${news[3].picture})`,
              backgroundSize: "cover",
            }}
          >
            <h1>{news[3].subject}</h1>
            <h3>{news[3].category}</h3>
          </div>
          <div
            id="fifth"
            style={{
              backgroundImage: `linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.5)
        ), url(${news[4].picture})`,
              backgroundSize: "cover",
            }}
          >
            <h1>{news[4].subject}</h1>
            <h3>{news[4].category}</h3>
          </div>
        </div>
      </div>
      <button onClick={() => setVisible(true)} style={{ width: "5%" }}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Content;
