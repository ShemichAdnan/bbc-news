import { useState, useRef } from "react";

const Popalert = ({
  visible,
  news,
  setNews,
}: {
  visible: boolean;
  news: any;
  setNews: any;
}) => {
  const [input, setInput] = useState({
    subject: "",
    description: "",
    category: "",
    link: "",
  });
  const subjectRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const categoryRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const addingNew = () => {
    setInput({
      subject: subjectRef.current ? subjectRef.current.value : "",
      description: descriptionRef.current ? descriptionRef.current.value : "",
      category: categoryRef.current ? categoryRef.current.value : "",
      link: linkRef.current ? linkRef.current.value : "",
    });
    setNews([input, news]);
  };
  if (visible) {
    return (
      <div id="popalert">
        <div id="box">
          <h1>Add news</h1>
          <label htmlFor="isubject">Subject: </label>
          <input type="text" id="isubject" max={40} ref={subjectRef} />
          <label htmlFor="idescription">Description: </label>
          <input type="text" id="idescription" max={80} ref={descriptionRef} />
          <label htmlFor="icategory">Category: </label>
          <input type="text" id="icategory" max={25} ref={categoryRef} />
          <label htmlFor="ilink">Category: </label>
          <input type="text" id="ilink" ref={linkRef} />
          <button onClick={() => addingNew()}>Add</button>
        </div>
      </div>
    );
  }
};

export default Popalert;
