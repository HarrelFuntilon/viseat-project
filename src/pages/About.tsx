import "../../dist/output.css";
import Header from "../components/Header";

const about = () => {
  return (
    <>
      <title>About the System</title>
      {/*To start, first open the project directory
      Then input the following command to make sure Tailwind CSS runs:
          npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
      */}

      {/*Navbar*/}
      <Header />

      <main className="bg-AboutBGD bg-cover bg-no-repeat h-screen">
        <div className="bg-black bg-opacity-50 h-full">
          <div className="invisible mb-36">space</div>
          {/*Main Grid*/}
          <div className="mt-48 md:mt-0 md:grid grid-cols-2 ml-2 mr-2 md:ml-24 md:mr-24 gap-56">
            {/*Mission & Vision*/}
            <div className="grid grid-rows-2 gap-16">
              <div>
                <h1 className="text-white font-bold text-2xl md:text-3xl uppercase">
                  mission
                </h1>
                <p className="text-white md:text-xl mt-2">
                  Our mission is to give our customers a place to celebrate life’s
                  special moments by offering the best food, service, and ambiance
                  in Philippines.
                </p>
              </div>
              <div>
                <h1 className="text-white font-bold text-2xl md:text-3xl uppercase">
                  vision
                </h1>
                <p className="text-white md:text-xl mt-2">
                  Turning dreams into reality by showcasing businesses to the
                  right audience at the right time.
                </p>
              </div>
            </div>
            {/*Contact*/}
            <div className="grid grid-rows-4 gap-5 mt-16 md:mt-0">
              <h1 className="text-white font-bold uppercase text-2xl md:text-3xl">
                where can you find us
              </h1>
              <div className="flex items-center">
                <span className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                  <img
                    src="../img/phone-call.png"
                    alt="telephone"
                    className="h-6 w-6"
                  />
                </span>
                <p className="text-white text-xl pl-6">(02) 4789-6016</p>
              </div>
              <div className="flex items-center">
                <span className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                  <img src="../img/at.svg" alt="email" className="h-6 w-6" />
                </span>
                <p className="text-white text-xl pl-6">LGU.Tourism@gmail.com</p>
              </div>
              <div className="flex items-center">
                <span className="h-16 w-16 bg-white rounded-full flex justify-center items-center">
                  <img
                    src="../img/message-sms.svg"
                    alt="SMS Message"
                    className="h-6 w-6"
                  />
                </span>
                <p className="text-white text-xl pl-6">+63 921 411 4112</p>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </>
  );
};

export default about;
