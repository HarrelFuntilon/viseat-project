import ts from "../components/scss/ThirdSection.module.scss";
import "../custom.scss";

const ThirdSection = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div className={`${ts.bg_image}`}>
          <div className={`${ts.overlay}`}>
            <div className={`${ts.wrapped} container`}>
              <div className="row">
                <div className={`${ts.title_container} col-12 container`}>
                  <h1 className={`${ts.text_Title}`}>
                    Example Store <br />
                    Promotion
                  </h1>
                </div>
              </div>
              <div className={`${ts.card_promote} container-fluid`}>
                <div className="row">
                  <div className="col-6 p-3">
                    <div
                      className={`${ts.image_container} container-fluid d-flex align-items-center justify-content-center`}
                    >
                      IMAGE
                    </div>
                  </div>
                  <div className={`${ts.text_wrapper} col-6`}>
                    <h1 className={`${ts.title}`}>Store Name</h1>
                    <p className={`${ts.descp}`}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Morbi eget justo in ligula efficitur pharetra. Nam vel
                      vulputate lacus, id suscipit nisi. Mauris vel ex est.
                      Phasellus in purus rhoncus, consectetur sapien nec,
                      pulvinar ante. Duis faucibus nisl ex, eget auctor sem
                      pharetra sit amet. Sed ornare a felis ut laoreet. Donec
                      ornare magna consectetur, consequat purus et, hendrerit
                      est.
                    </p>
                    <p className={`${ts.address}`}>
                      Suite 930 12292 Royal Extensions, Schummport, VA 13335
                    </p>
                    <h1
                      style={{ textTransform: "uppercase", letterSpacing: "1" }}
                    >
                      Popular foods
                    </h1>
                    <ul>
                      <li>
                        <p className={`${ts.address}`}>
                          Burgers, French Fries, Pasta Express
                        </p>
                      </li>
                    </ul>
                    <div className="row">
                      <div className={`${ts.address} col-6`}>
                        ESTIMATED PRICE: $0 - 1000
                      </div>
                      <div className={`${ts.address} col-6`}>
                        PHONE NUMBER: +16595882484{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSection;
