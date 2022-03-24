import react, { useState } from "react";
import axios from "axios";

const ModalForm = (props) => {
  const { categoryIsCreated, setCategoryIsCreated } = props;
  const [nameCategory, setNameCategory] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");

  const onClickHandler = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/api/new-category", {
      nameCategory: nameCategory,
      photoUrl: photoUrl,
    });
    setCategoryIsCreated(!categoryIsCreated);
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-outline-success"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Añadir categoría
      </button>

      <div
        className="modal fade centered"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          {/* <form onSubmit={SubmitHandler}> */}
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Añadir categoría
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <label className="fw-bold" htmlFor="nameCategory">
                Nombre de la categoría:
              </label>
              <input
                type="text"
                className="form-control"
                id="nameCategory"
                aria-describedby="emailHelp"
                onChange={(e) => setNameCategory(e.target.value)}
              ></input>

              <label className="fw-bold" htmlFor="photoUrl">
                Url de la imagen:
              </label>
              <input
                type="text"
                className="form-control"
                id="photoUrl"
                aria-describedby="emailHelp"
                onChange={(e) => setPhotoUrl(e.target.value)}
              ></input>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <button
                type="submit"
                className="btn btn-success"
                data-bs-dismiss="modal"
                onClick={onClickHandler}
              >
                Guardar
              </button>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
    </>
  );
};
export default ModalForm;
