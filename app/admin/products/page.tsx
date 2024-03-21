import Breadcrumb from "@/components/breadcrumb";

const breadcrumbs = [
  { label: "Dashboard", link: "/admin" },
  { label: "Products" },
];

export default function Products() {
  return (
    <div className="h-full">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex items-center justify-center w-full h-[800px] text-2xl">
        Products | WIP
      </div>
    </div>
  );
}
