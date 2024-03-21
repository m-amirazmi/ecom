import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center flex-col">
      <p className="text-4xl">Work In Progress...</p>
      <p className="mt-4">Admin?</p>
      <Button className="mt-2" variant="outline">
        <Link href="/admin">Go To Admin</Link>
      </Button>
    </div>
  );
}
