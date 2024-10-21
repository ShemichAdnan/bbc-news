import Content from "./Content";
import TodayDate from "./TodayDate";

const Showcase = () => {
  return (
    <div id="showcase">
      <div className="cut">
        <div id="messages">
          <h1>Welcome to BBC.com</h1>
          <TodayDate />
        </div>
        <Content />
      </div>
    </div>
  );
};

export default Showcase;
