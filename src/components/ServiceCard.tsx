import { ReactNode } from "react";

export default function ServiceCard({
  title,
  price,
  icon,
  children,
}: {
  title: string;
  price?: string;
  icon?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="card">
      <div className="flex items-start gap-3">
        {icon ? <div className="text-2xl leading-none">{icon}</div> : null}
        <div className="flex-1">
          <h3 className="h3 text-[#003366]">{title}</h3>
          {price ? <p className="mt-1 text-[#0d4d8a] font-medium">{price}</p> : null}
          <div className="mt-3 text-sm text-gray-700 leading-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
