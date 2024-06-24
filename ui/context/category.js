"use client";
import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";

export const CategoryContext = createContext({});

const apiURL = `${process.env.API}/admin/category`;

export const CategoryProvider = ({ children }) => {
  // to create a category
  const [name, setName] = useState("");
  // for fetching all categories
  const [categories, setCategories] = useState([]);
  // for update and delete
  const [updatingCategory, setUpdatingCategory] = useState(null);

  const createCategory = async () => {
    try {
      const res = await fetch(apiURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.err);
      } else {
        toast.success("Categoría creada");
        setName("");
        setCategories([data, ...categories]);
      }
    } catch (err) {
      console.error(err);
      toast.error("Algo salió mal.");
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.err);
      } else {
        setCategories(data);
      }
    } catch (err) {
      console.error(err);
      toast.error("Algo salió mal.");
    }
  };

  const updateCategory = async () => {
    try {
      const res = await fetch(`${apiURL}/${updatingCategory._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatingCategory),
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.err);
      } else {
        toast.success("Categoría actualizada");
        setUpdatingCategory(null);
        const newCategories = categories.map((category) =>
          category._id === data._id ? data : category,
        );
        setCategories(newCategories);
      }
    } catch (err) {
      console.error(err);
      toast.error("Algo salió mal.");
    }
  };

  const deleteCategory = async () => {
    try {
      const res = await fetch(`${apiURL}/${updatingCategory._id}`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.err);
      } else {
        toast.success("Categoría eliminada");
        setCategories(
          categories.filter((category) => category._id !== data._id),
        );
        setUpdatingCategory(null);
      }
    } catch (err) {
      console.error(err);
      toast.error("Algo salió mal.");
    }
  };

  return (
    <CategoryContext.Provider
      value={{
        name,
        setName,
        categories,
        setCategories,
        updatingCategory,
        setUpdatingCategory,
        createCategory,
        fetchCategories,
        updateCategory,
        deleteCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => useContext(CategoryContext);
