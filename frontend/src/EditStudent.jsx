import { useEffect } from "react";
import { useEffect, useEffect } from "react";

import axios from "axios";

function EditStudent() {
  const [useerForm, setUserForm] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  let params = useParams();
  let navigate = useNavigate();

  const inputHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };

  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/students/update-student/" + params.id, {
        name: userForm.name,
        email: userForm.email,
        rollno: userForm.rollno,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/student-list");
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/update-student/" + params.id)
      .then((res) => {
        setUserForm({
          name: res.data.data.name,
          email: res.data.data.email,
          rollno: res.data.data.rollno,
        });
      });
  }, []);

  return (
    <div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              value={userForm.name}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              value={userForm.email}
              onChange={inputHandler}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Roll no</label>
            <input
              type="text"
              className="form-control"
              name="rollno"
              id="rollno"
              value={userForm.rollno}
              onChange={inputHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditStudent