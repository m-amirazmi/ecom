export interface BreadcrumbItem {
  link?: string;
  label: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
