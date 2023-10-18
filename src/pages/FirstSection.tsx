const FirstSection = () => {
  return (
    <>
      <div className="section">
        <div className="bg-container">
          <div className="overlay"></div>
          <img src="../../img/bg_img.jpg" alt="" />
        </div>
      </div>

      <div className="wrapper h-full flex items-center">
        <div className="container text-container">
          <h1 className="titleText">
            Calling all Foodies and CATERING Owners!
          </h1>
          <p className="paragraphText">
            Are you a passionate restaurant owner looking to boost your
            business?
            <br /> Or maybe you're a food enthusiast always on the hunt for
            delectable dining experiences?
          </p>
          <div className="container d-flex justify-content-center p-3">
            <a href="#benefits" className="">
              <h1 className="btn btn-text">Look Further</h1>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FirstSection;
