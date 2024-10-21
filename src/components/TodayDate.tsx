const TodayDate = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return <h1>{formattedDate}</h1>;
};

export default TodayDate;
