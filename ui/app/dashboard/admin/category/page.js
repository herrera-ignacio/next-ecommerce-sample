import AdminCategoryCreate from "@/components/category/AdminCategoryCreate";
import AdminCategoryList from "@/components/category/AdminCategoryList";

export default function AdminCategory() {
  return (
    <div className="container mb-5">
      <AdminCategoryCreate />
      <AdminCategoryList />
    </div>
  );
}
