import Breadcrumb from "@/components/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const breadcrumbs = [
  { label: "Dashboard", link: "/admin" },
  { label: "Products", link: "/admin/products" },
  { label: "Create" },
];

export default function ProductsCreate() {
  return (
    <div className="h-full flex flex-col gap-4">
      <Breadcrumb items={breadcrumbs} />
      <h1 className="text-3xl font-bold">Add Product</h1>

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="rounded-none border-border basis-2/5 flex-grow-0 flex-shrink-0">
          <CardHeader>
            <CardTitle>Product information</CardTitle>
            <CardDescription>
              The basic information of the product.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Product name*</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                    className="bg-background"
                  />
                  <span className="text-xs text-muted-foreground">
                    Do not exceed 20 characters for product name.
                  </span>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="price">Price*</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter product name"
                    step=".01"
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" className="bg-background">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="border-border">
                      <SelectItem value="shoes">Shoes</SelectItem>
                      <SelectItem value="bags">Bags</SelectItem>
                      <SelectItem value="shirts">Shirts</SelectItem>
                      <SelectItem value="raincoats">Raincoats</SelectItem>
                      <SelectItem value="tables">Tables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    className="h-[120px] bg-background"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="rounded-none border-border basis-3/5 flex-grow-0 flex-shrink-0">
          <CardHeader>
            <CardTitle>Product images</CardTitle>
            <CardDescription>The images for the product.</CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Product name*</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter product name"
                    className="bg-background"
                  />
                  <span className="text-xs text-muted-foreground">
                    Do not exceed 20 characters for product name.
                  </span>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="price">Price*</Label>
                  <Input
                    id="price"
                    type="number"
                    placeholder="Enter product name"
                    step=".01"
                    className="bg-background"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category" className="bg-background">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="border-border">
                      <SelectItem value="shoes">Shoes</SelectItem>
                      <SelectItem value="bags">Bags</SelectItem>
                      <SelectItem value="shirts">Shirts</SelectItem>
                      <SelectItem value="raincoats">Raincoats</SelectItem>
                      <SelectItem value="tables">Tables</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    className="h-[120px] bg-background"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
