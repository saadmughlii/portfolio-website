type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  githubUrl,
}: ProjectCardProps) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-text">{title}</h3>
      <p className="mt-2 text-muted">{description}</p>
      <ul className="mt-3 flex gap-2 flex-wrap">
        {tech.map((t) => (
          <li key={t} className="text-sm text-muted">
            {t}
          </li>
        ))}
      </ul>
      <a
        href={githubUrl}
        className="text-accent hover:underline mt-2 inline-block"
      >
        GitHub
      </a>
    </div>
  );
}
