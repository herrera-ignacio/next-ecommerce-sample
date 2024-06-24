"use client";
import { useCategory } from "@/context/category";
import { useEffect } from "react";

export default function AdminCategoryList() {
  const { fetchCategories, categories, setUpdatingCategory } = useCategory();

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="mt-5">
      <p className="lead">Lista de categorías</p>
      <div className="row">
        <div className="col">
          {categories.map((c) => (
            <button
              key={c._id}
              className="btn"
              onClick={() => {
                setUpdatingCategory(c);
              }}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
