import Breadcrumb from "@/components/breadcrumb";

const breadcrumbs = [
  { label: "Dashboard", link: "/admin" },
  { label: "Products", link: "/admin/products" },
  { label: "Create" },
];

export default function ProductsCreate() {
  return (
    <div className="h-full">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex items-center justify-center w-full h-[800px] text-2xl">
        ProductsCreate | WIP
      </div>
    </div>
  );
}
