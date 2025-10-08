import Image from "next/image";
import { skills } from "@/lib/constants";

export function SkillsList() {
  return (
    <ul className="flex gap-4 flex-wrap items-center">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="tooltip-toggle"
          aria-label={skill.name}
          tabIndex={0}
        >
          <Image
            src={skill.icon}
            alt={skill.name}
            height={skill.height}
            width={skill.width}
            sizes="42px"
            style={{ width: 'auto', height: 'auto' }}
          />
        </li>
      ))}
    </ul>
  );
}

