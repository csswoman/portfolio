import Image from "next/image";
import { socialLinks } from "@/lib/constants";

export function SocialLinks() {
  return (
    <div className="flex gap-4 mb-12">
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ir a ${social.name}`}
          title={`Ir a ${social.name}`}
        >
          <Image
            src={social.icon}
            alt={`${social.name} icon`}
            width={28}
            height={28}
            sizes="28px"
            className="hover:opacity-50 transition-opacity"
          />
        </a>
      ))}
    </div>
  );
}

