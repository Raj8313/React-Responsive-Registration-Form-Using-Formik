import unnamed from "../assets/unnamed.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";

const x = {
  email: "",
  password: "",
  retypepassword: "",
  firstname: "",
  lastname: "",
  gender: "",
  selectcountry: "",
  termsandconditions: "",
  newsletters: "",
};

const Signupform = () => {
  const formik = useFormik({
    initialValues: x,
    onSubmit: (values) => {},
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Invalid email address")
        .required("Email Required"),
      password: Yup.string().min(5).required("Password is Required"),
      retypepassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
      firstname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("First Name Required"),
      lastname: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Last Name Required"),
      gender: Yup.string().required("Gender Required"),
      selectcountry: Yup.string().required("Country Required"),
      termsandconditions: Yup.boolean()
        .required("Need to Agree terms and conditions")
        .oneOf([true], "You must accept the terms and conditions."),
      newsletters: Yup.boolean().oneOf(
        [true],
        "You must accept the terms and conditions."
      ),
    }),
  });

  return (
    <div className="col-lg-8 offset-lg-2   col-md-12 mt-5">
      <div className="card">
        <div className="card-body border-top border-warning border-5">
          <p className="fw-bold fs-2 text-center ">
            Responsive Registration Form
          </p>
          <form onSubmit={formik.handleSubmit}>
            {/* ------------------------------------------------email ------------------------------------  */}
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                type="email"
                className={`form-control ${
                  formik.errors.email ? "is-invalid" : null
                }`}
                placeholder="email"
                name="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <div className="invalid-feedback">{formik.errors.email}</div>
            </div>

            {/* ------------------------------------------- password ------------------------------------- */}

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className={`form-control ${
                  formik.errors.password ? "is-invalid" : null
                }`}
                placeholder="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <div className="invalid-feedback">{formik.errors.password}</div>
            </div>

            {/* ------------------------------------------- re-type password ------------------------------------- */}

            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input
                type="password"
                className={`form-control ${
                  formik.errors.retypepassword ? "is-invalid" : null
                }`}
                placeholder="Re-type password"
                name="retypepassword"
                id="retypepassword"
                onChange={formik.handleChange}
                value={formik.values.retypepassword}
              />
              <div className="invalid-feedback">
                {formik.errors.retypepassword}
              </div>
            </div>

            {/* --------------------------------------------firstname--------------------------------------------------- */}
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.errors.firstname ? "is-invalid" : null
                    }`}
                    placeholder="First Name"
                    name="firstname"
                    id="firstname"
                    onChange={formik.handleChange}
                    value={formik.values.firstname}
                  />
                  <div className="invalid-feedback">
                    {formik.errors.firstname}
                  </div>
                </div>
              </div>

              {/* -----------------------------------------last name--------------------------------------------------  */}
              <div className="col-lg-6 col-md-12">
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faUser} />
                  </span>
                  <input
                    type="text"
                    className={`form-control ${
                      formik.errors.lastname ? "is-invalid" : null
                    }`}
                    placeholder="Last Name"
                    name="lastname"
                    id="lastname"
                    onChange={formik.handleChange}
                    value={formik.values.lastname}
                  />
                  <div className="invalid-feedback">
                    {formik.errors.lastname}
                  </div>
                </div>
              </div>
            </div>

            {/*---------------------------------------------------- gender-------------------------------------------- */}
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 col-3">
                <div className="form-check">
                  <input
                    className={`form-check-input ${
                      formik.errors.gender ? "is-invalid" : null
                    }`}
                    type="radio"
                    name="gender"
                    id="flexRadioDefault1"
                    value="male"
                    onChange={formik.handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault1"
                  >
                    Male
                  </label>
                </div>
              </div>

              <div className="col-lg-2 col-md-2 col-sm-2 col-3">
                <div className="form-check">
                  <input
                    className={`form-check-input ${
                      formik.errors.gender ? "is-invalid" : null
                    }`}
                    type="radio"
                    name="gender"
                    id="flexRadioDefault2"
                    value="female"
                    onChange={formik.handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexRadioDefault2"
                  >
                    Female
                  </label>
                </div>
              </div>
              <div className="invalid-feedback">{formik.errors.gender}</div>
            </div>

            {/* --------------------------------------select country-------------------------------------- */}
            <div className="row">
              <div className="col-lg-12 mt-3">
                <select
                  className={`form-select ${
                    formik.errors.selectcountry ? "is-invalid" : null
                  }`}
                  id="floatingSelect"
                  aria-label="Floating label select example"
                  name="selectcountry"
                >
                  <option defaultValue>Select Country</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
                <div className="invalid-feedback">
                  {formik.errors.selectcountry}
                </div>
              </div>
            </div>
            {/* ------------------------------------------------ Terms and conditions --------------------- */}
            <div className="row">
              <div className="col-lg-12 mt-3">
                <div className="form-check">
                  <input
                    className={`form-check-input ${
                      formik.errors.termsandconditions ? "is-invalid" : null
                    }`}
                    type="checkbox"
                    name="termsandconditions"
                    value={true}
                    id="flexCheckDefault"
                    onChange={formik.handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    I agree with terms and conditions
                  </label>
                  <div className="invalid-feedback">
                    {formik.errors.termsandconditions}
                  </div>
                </div>
                {/*------------------------------------------------- News Letters ------------------------------------------ */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="newsletters"
                    value="newsletters"
                    id="flexCheckChecked"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckChecked"
                  >
                    I want to receive newsletters
                  </label>
                </div>
              </div>
              <div className="invalid-feedback">
                {formik.errors.newsletters}
              </div>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-warning text-white" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signupform;
