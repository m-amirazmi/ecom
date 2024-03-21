import Breadcrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const breadcrumbs = [
  { label: "Dashboard", link: "/admin" },
  { label: "Products" },
];

export default function Products() {
  return (
    <div className="h-full flex flex-col gap-8">
      <Breadcrumb items={breadcrumbs} />
      <div className="">
        <Button variant="outline">
          <Link href="/admin/products/create">Add Product</Link>
        </Button>
        <div className="flex items-center justify-center w-full h-[800px] text-2xl">
          Products | WIP
        </div>
      </div>
    </div>
  );
}
