import { Link } from 'react-router-dom';
import style from '../../components/scss/adminPagLogin.module.css';

const AdminPageLogin = () => {
  return (
    <>
      <div
        className={`${style.wrapper} d-flex align-items-center justify-content-center`}
      >
        <div className={`${style.login_container}`}>
          <h1 className={`${style.title}`}>admin login</h1>
          <p className={`${style.subtitle}`}>
            Login for <span>Viseat</span>
          </p>

          <div className={`${style.input_container} container-fluid`}>
            <div className="row">
              <div className="col-12">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Username"
                  className={`${style.inputText}`}
                />
              </div>
              <div className="col-12">
                <input
                  type="password"
                  name=""
                  id=""
                  placeholder="Password"
                  className={`${style.inputText}`}
                />
              </div>
            </div>
          </div>
          <div className="container d-flex align-item-center justify-content-center m-3">
            <Link className={`${style.btn} btn`} to={'/admin/adminpage'}>
              LOGIN
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPageLogin;
