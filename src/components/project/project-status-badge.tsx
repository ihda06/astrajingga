import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/projects";

interface ProjectStatusBadgeProps {
  status: Project["status"];
  className?: string;
}

export default function ProjectStatusBadge({
  status,
  className,
}: ProjectStatusBadgeProps) {
  const statusConfig = {
    active: {
      label: "Active",
      className: "text-green-600 bg-green-50 border-green-200 hover:bg-green-100",
    },
    inactive: {
      label: "Inactive",
      className: "text-gray-600 bg-gray-50 border-gray-200 hover:bg-gray-100",
    },
    dead: {
      label: "Dead",
      className: "text-orange-600 bg-orange-50 border-orange-200 hover:bg-orange-100",
    },
  };

  const config = statusConfig[status];

  return (
    <Badge
      variant="outline"
      className={`${config.className} ${className || ""}`}
    >
      {config.label}
    </Badge>
  );
}

