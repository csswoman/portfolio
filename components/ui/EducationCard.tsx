import type { Education } from "@/types";

interface EducationCardProps {
  education: Education;
}

export function EducationCard({ education }: EducationCardProps) {
  return (
    <li>
      <div className="grid gap-0.5">
        <p className="text-purple-300">{education.title}</p>
        <div className="flex gap-x-2 items-center flex-wrap">
          <p className="font-bold">{education.institution}</p>
          <p className="text-[#D9D9D9] text-sm">{education.period}</p>
        </div>
      </div>
    </li>
  );
}

