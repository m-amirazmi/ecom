import Breadcrumb from "@/components/breadcrumb";

const breadcrumbs = [
  { label: "Dashboard", link: "/admin" },
  { label: "Categories", link: "/admin/categories" },
  { label: "Create" },
];

export default function CategoriesCreate() {
  return (
    <div className="h-full">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex items-center justify-center w-full h-[800px] text-2xl">
        CategoriesCreate | WIP
      </div>
    </div>
  );
}
