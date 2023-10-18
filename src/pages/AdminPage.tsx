import { Link } from "react-router-dom";
import Table from "../components/Table";
import style from "../components/scss/adminPage.module.css";
import CreateUserPage from "./CreateUserPage";

const adminPage = () => {
  return (
    <>
      <div className={`${style.wrapper} container-fluid`}>
        <div className={`${style.panel_container} row`}>
          <div className={`${style.panel} col-2`}>
            <h1 className={style.title}>Admin Table</h1>
            <div className={`${style.btn_header} col-12 btn`}>
              Store Information
            </div>
            <div className={`${style.btn_header} col-12 btn`}>Users</div>
            <Link to="/admin/adminpage/createUserPage">
              <div
                className={`col btn ${style.btn_header} ${style.btn_addUser}`}>
                + Add User
              </div>
            </Link>
            .
          </div>
          <div className="col-10 p-0">
            <div className={`${style.header_wrapper} row`}>
              <div className={`${style.flexItems} col-10`}>
                <h1 className={`${style.subTitle} ${style.title} `}>
                  Table list
                </h1>
              </div>
              <div className={`${style.flexItems} col-2`}>
                <div className={`${style.btn_logout} ${style.btn_header} btn`}>
                  Log Out
                </div>
              </div>
            </div>
            <div className={style.table_container}>
              <div className="row">
                <div className="col-12">
                  <Table />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default adminPage;
