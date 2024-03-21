import Breadcrumb from "@/components/breadcrumb";

const breadcrumbs = [
  { label: "Dashboard", link: "/admin" },
  { label: "Attributes", link: "/admin/attributes" },
  { label: "Create" },
];

export default function AttributesCreate() {
  return (
    <div className="h-full">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex items-center justify-center w-full h-[800px] text-2xl">
        AttributesCreate | WIP
      </div>
    </div>
  );
}
