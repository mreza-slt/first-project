import img from "../assets/images/download.png";

const FirstPage = () => {
  return (
    <div className="text-center h-screen" style={{ background: "#f4f9fe" }}>
      <img className="pt-20 mx-auto" src={img} alt="" />
      <h1 className="text-xl font-bold mt-8">
        Please search trainers by adding the trainer ID to URL
      </h1>
      <h1 className="text-xl font-bold mt-8">
        Example:{" "}
        <span className="font-normal">
          https://rambody-trainer.azureedge.net
        </span>
        /test
      </h1>
    </div>
  );
};

export default FirstPage;
