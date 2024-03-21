import Breadcrumb from "@/components/breadcrumb";

const breadcrumbs = [{ label: "Dashboard" }];

export default function Dashboard() {
  return (
    <div className="h-full">
      <Breadcrumb items={breadcrumbs} />
      <div className="flex items-center justify-center w-full h-[800px] text-2xl">
        Dashboard | WIP
      </div>
    </div>
  );
}
