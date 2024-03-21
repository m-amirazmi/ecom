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
          const BreadcrumbTag = i.link ? BreadcrumbLink : BreadcrumbPage;
          return (
            <Fragment key={k}>
              <BreadcrumbItem>
                <BreadcrumbTag asChild>
                  {i.link ? <Link href={i.link}>{i.label}</Link> : i.label}
                </BreadcrumbTag>
              </BreadcrumbItem>
              {k <= items.length - 2 && <BreadcrumbSeparator />}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </B>
  );
}
