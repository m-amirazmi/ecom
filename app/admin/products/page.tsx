import Breadcrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const breadcrumbs = [
  { label: "Dashboard", link: "/admin" },
  { label: "Products" },
];

export default function Products() {
  return (
    <div className="h-full flex flex-col gap-4">
      <Breadcrumb items={breadcrumbs} />
      <div>
        <Button variant="outline">
          <Link href="/admin/products/create">Add Product</Link>
        </Button>
      </div>
    </div>
  );
}
