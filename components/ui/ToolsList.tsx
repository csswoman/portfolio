import Image from "next/image";
import { tools } from "@/lib/constants";

export function ToolsList() {
  return (
    <ul className="flex gap-4 flex-wrap">
      {tools.map((tool) => (
        <li
          key={tool.name}
          className="tooltip-toggle"
          aria-label={tool.name}
          tabIndex={0}
        >
          <Image
            src={tool.icon}
            alt={tool.name}
            width={38}
            height={38}
            sizes="38px"
            style={{ width: 'auto', height: 'auto' }}
          />
        </li>
      ))}
    </ul>
  );
}

