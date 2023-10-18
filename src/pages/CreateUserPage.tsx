import { Link } from "react-router-dom";
import style from "../components/scss/CreateUserPage.module.css";

const CreateUserPage = () => {
  return (
    <>
      <div
        className={` d-flex justify-content-center align-items-center ${style.wrapper}`}>
        <div className={`container ${style.wrapper_container} `}>
          <h1 className={style.title}>Create Owner User Account</h1>
          <div
            className={`${style.input_container} d-flex align-items-center justify-content-center m-5`}>
            <input type="text" name="" id="" placeholder="username" />
            <input type="password" name="" id="" placeholder="password" />
          </div>
          <div
            className={`${style.btn_containers} m-3 d-flex align-items-center justify-content-center`}>
            <div className={`${style.buttons} btn btn-primary`}>Create</div>
            <Link to="/admin/adminpage ">
              <div className={`${style.buttons} btn`}>Cancel</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUserPage;
