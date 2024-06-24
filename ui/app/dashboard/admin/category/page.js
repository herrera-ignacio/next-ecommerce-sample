import CategoryCreate from "@/components/category/CategoryCreate";
import CategoryList from "@/components/category/CategoryList";

export default function AdminCategory() {
  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <p className="lead">Crear categoría</p>
          <CategoryCreate />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <p className="lead">Lista de categorías</p>
          <CategoryList />
        </div>
      </div>
    </div>
  );
}
