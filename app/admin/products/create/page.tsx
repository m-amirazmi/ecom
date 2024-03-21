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
      <h1 className="text-3xl font-bold">Add Product</h1>
      <Breadcrumb items={breadcrumbs} />

      <div className="flex flex-col md:flex-row gap-4">
        <Card className="rounded-none border-border flex-1">
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
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger id="category">
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
                  <Label htmlFor="brand">Brand</Label>
                  <Select>
                    <SelectTrigger id="brand">
                      <SelectValue placeholder="Select a brand" />
                    </SelectTrigger>
                    <SelectContent position="popper" className="border-border">
                      <SelectItem value="nike">Nike</SelectItem>
                      <SelectItem value="adidas">Adidas</SelectItem>
                      <SelectItem value="bata">Bata</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter product description"
                    className="h-[120px]"
                  />
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* <Card className="rounded-none border-border flex-1">Product Image</Card> */}
      </div>

      {/* <div>
        <Card className="w-[350px] rounded-none border-border">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="next">Next.js</SelectItem>
                      <SelectItem value="sveltekit">SvelteKit</SelectItem>
                      <SelectItem value="astro">Astro</SelectItem>
                      <SelectItem value="nuxt">Nuxt.js</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </CardFooter>
        </Card>
        <div className="flex items-center justify-center w-full h-[800px] text-2xl">
          ProductsCreate | WIP
        </div>
      </div> */}
    </div>
  );
}
