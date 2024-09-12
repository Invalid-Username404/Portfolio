interface SkillBadgeProps {
  skill: string;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const skillLowerCase = skill.toLowerCase();
  const skillBgColor = `bg-skillBg-${skillLowerCase}`;
  const skillHoverColor = `hover:bg-skillBg-${skillLowerCase}/80`;

  return (
    <span
      className={`
        ${skillBgColor} ${skillHoverColor}
        text-skillColor text-sm font-medium
        px-3 py-1.5 rounded-full
        transition-all duration-300 ease-in-out
        shadow-sm hover:shadow-md
        cursor-default
      `}
      title={`Skill: ${skill}`}
    >
      {skill}
    </span>
  );
}
