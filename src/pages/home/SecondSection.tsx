import { Link } from 'react-router-dom';

const SecondSection = (): any => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 bg-warning">
            <h1 id="benefits" className="mainTitle p-3">
              BENEFITS
            </h1>
          </div>
        </div>
      </div>
      <div className="container-fluid section-2">
        <div className="row">
          <div className="col-6 left-container s2-containers">
            <h1 className=" s2-title ">
              FOR CATERING
              <br /> OWNERS
            </h1>
            <p className="s2-paragraph">
              Turbocharge Your Business: Attract new customers and increase your
              revenue
            </p>
            <p className=" s2-paragraph ">
              Free of charge: Gives a free promotion of small business
            </p>
            <div className="container d-flex justify-content-center p-3">
              <Link to="pages/promote">
                <h1 className="btn btn-look promote">Look to Promote</h1>
              </Link>
            </div>
          </div>

          <div className="col-6 right-container s2-containers">
            <h1 className=" s2-title">
              FOR FOOD ENTHUSIAST
              <br />
            </h1>
            <p className=" s2-paragraph ">
              Find Your Flavor: Discover a world of culinary delights at your
              fingertips.
            </p>
            <p className=" s2-paragraph">
              Helps you to explore popular food to variety of restaurants
            </p>
            <div className="container d-flex justify-content-center p-3">
              <Link to="pages/explore">
                <h1 className="btn btn-look">Look to EXPLORE</h1>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecondSection;
