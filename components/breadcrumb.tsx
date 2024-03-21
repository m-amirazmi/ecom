import { BreadcrumbProps } from "@/types/breadcrumb.types";
import {
  Breadcrumb as B,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import Link from "next/link";

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <B>
      <BreadcrumbList>
        {items.map((i, k) => {
          return (
            <Fragment key={k}>
              <BreadcrumbItem>
                {i.link ? (
                  <Link href={i.link}>{i.label}</Link>
                ) : (
                  <BreadcrumbPage>{i.label}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {k <= items.length - 2 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </B>
  );
}
