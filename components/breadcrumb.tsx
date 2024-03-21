import { BreadcrumbProps } from "@/types/breadcrumb.types";
import {
  Breadcrumb as B,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <B>
      <BreadcrumbList>
        {items.map((i, k) => {
          const BreadcrumbTag = i.link ? BreadcrumbLink : BreadcrumbPage;
          return (
            <>
              <BreadcrumbItem key={i.label}>
                <BreadcrumbTag href={i.link}>{i.label}</BreadcrumbTag>
              </BreadcrumbItem>
              {k <= items.length - 2 && <BreadcrumbSeparator />}
            </>
          );
        })}
      </BreadcrumbList>
    </B>
  );
}
