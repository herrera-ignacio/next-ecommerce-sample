"use client";
import { useCategory } from "@/context/category";

export default function AdminCategoryCreate() {
  const {
    name,
    setName,
    updatingCategory,
    setUpdatingCategory,
    createCategory,
    updateCategory,
    deleteCategory,
  } = useCategory();

  return (
    <div className="row">
      <div className="col">
        <p className="lead">Crear categoría</p>
        <input
          type="text"
          className="form-control p-2 my-2"
          value={updatingCategory ? updatingCategory.name : name}
          onChange={(e) =>
            updatingCategory
              ? setUpdatingCategory({
                  ...updatingCategory,
                  name: e.target.value,
                })
              : setName(e.target.value)
          }
        />

        <div className="d-flex justify-content-between">
          <button
            className={`btn bg-${updatingCategory ? "info" : "primary"} text-light`}
            onClick={(e) => {
              e.preventDefault();
              updatingCategory ? updateCategory() : createCategory();
            }}
          >
            {updatingCategory ? "Modificar" : "Crear"}
          </button>

          {updatingCategory && (
            <>
              <button
                className="btn bg-danger text-light"
                onClick={(e) => {
                  e.preventDefault();
                  deleteCategory();
                }}
              >
                Borrar
              </button>

              <button
                className="btn bg-success text-light"
                onClick={() => setUpdatingCategory(null)}
              >
                Cancelar
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
