import type { WorkExperience } from "@/types";

interface ExperienceCardProps {
  experience: WorkExperience;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <li>
      <div className="work-exp pl-4 gap-1 grid relative">
        <p className="text-purple-300">{experience.title}</p>
        <div className="flex gap-x-2 items-center flex-wrap">
          <p className="font-bold">{experience.company}</p>
          <p className="text-sm">{experience.period}</p>
        </div>
        <p>{experience.description}</p>
      </div>
    </li>
  );
}

