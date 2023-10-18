import "../../dist/output.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const inquire = () => {
  return (
    <>
      <title>Inquire an Establishment</title>
      <link rel="stylesheet" href="../../dist/output.css" />
      {/*To start, first open the project directory
        Then input the following command to make sure Tailwind CSS runs:
            npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
    */}
      {/*Navbar*/}
      <Header/>

      <main className="bg-InquireBGD bg-cover bg-no-repeat bg-center">
        <div className="bg-black bg-opacity-50 ">
          {/*space*/}
          <div className="invisible">space</div>
          {/*Left Decoration*/}
          <div className="md:fixed mt-32 md:mt-32 md:ml-16 z-0">
            <Link to="/pages/explore">
              <p className="text-white hover:text-main-blue transition-colors mb-2">
                <a href="explore.html">&lt; Keep Exploring</a>
              </p>
            </Link>
            <h1 className="text-white font-bold uppercase text-clip text-3xl md:text-7xl mb-4 flex justify-center md:block text-center md:text-start">
              Inquire an
              <br />
              Establishment
            </h1>
            <p className="text-gray-400 text-sm md:text-lg flex justify-center md:block text-center md:text-start">
              Need to book a reservation? Curious about their event offers? <br />
              Submit an inquiry to let them know you are interested! <br />
            </p>
            <p className="text-gray-400 invisible text-sm md:text-lg md:flex md:text-start">
              Just input information in the following fields <br />
              then click submit
            </p>
          </div>
          {/*Form*/}
          <div className="md:flex justify-end z-10">
            <div className="md:rounded-3xl md:w-2/5 bg-white p-12 mt-16 md:mt-32 md:ml:16 md:mr-16 overflow-visible ">
              <h1 className="text-black font-bold text-xl">ABOUT THE INQUIRY</h1>
              <p className="text-gray-400 text-sm">
                Please provide information in all fields
              </p>
              <h1 className="text-gray-500 mt-4">Chosen Establishment:</h1>
              <select className="select select-bordered w-full">
                <option disabled={true} selected={true}>
                  Select Establishment
                </option>
                <option>Kyo To</option>
                <option>Metronome</option>
                <option>Wolfgang's Steak House</option>
              </select>
              <h1 className="text-gray-500 mt-4">Details:</h1>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full h-52 text-base max-h-52"
                placeholder="Description of your Inquiry"
                defaultValue={""}
              />
              <hr className="mt-8 mb-8" />
              <h1 className="text-black font-bold text-xl">
                INQUIRER INFORMATION
              </h1>
              <p className="text-gray-400 text-sm">
                Details of the person inquiring information
              </p>
              <h1 className="text-gray-500 mt-4">Name:</h1>
              <input
                name="estname"
                type="text"
                placeholder="Juan Dela Cruz"
                className="input input-bordered w-full"
              />
              <h1 className="text-gray-500 mt-4">Email Address:</h1>
              <input
                name="estname"
                type="text"
                placeholder="juan.dela.cruz@gmail.com"
                className="input input-bordered w-full"
              />
              {/*Action Buttons*/}
              <div className="mt-4">
                <p className="text-justify text-xs">
                  The establishment will continue to contact you via the email you
                  provided. Do note that establishments will ask you for more
                  details to further entertain with your inquiry. Please be
                  mindful of the information you have inputted, as well as
                  information you will provide to the establishments. By clicking
                  submit, you agree to providing the information you inputted
                  above to the system.
                </p>
                <form>
                  <div className="mt-4 grid grid-cols-2 gap-6">
                    <button className="btn w-full">Clear</button>
                    <button className="btn btn-primary border-main-blue bg-main-blue w-full text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/*space*/}
          <div className="mt-8 md:mt-28 invisible">space</div>
        </div>
      </main>
    </>
  );
};

export default inquire;
