import { Link } from 'react-router-dom';
import style from '../../components/scss/adminPage.module.css';
import { useState } from 'react';
import StoreTable from '../../components/StoreTable';

const adminPage = (): any => {
  const [show, setShow] = useState(false);
  const [dataType, setDataType] = useState('');

  const handleclick = (dataType: string): void => {
    setShow(true);
    setDataType(dataType);
  };
  return (
    <>
      <div className={`${style.wrapper} container-fluid`}>
        <div className={`${style.panel_container} row`}>
          <div className={`${style.panel} col-2`}>
            <h1 className={style.title}>Admin Table</h1>

            <div
              className={`${style.btn_header} btn col-12`}
              onClick={() => {
                handleclick('Store Information');
              }}
            >
              Store Information
            </div>
            <div
              className={`${style.btn_header} btn col-12`}
              onClick={() => {
                handleclick('Users');
              }}
            >
              Users
            </div>

            <Link to="/admin/adminpage/createUserPage">
              <div
                className={`col btn ${style.btn_header} ${style.btn_addUser}`}
              >
                + Add User
              </div>
            </Link>
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
                  {dataType !== '' && show && <StoreTable />}
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
