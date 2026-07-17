interface Props {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: Props) {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-secondary">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-muted text-base max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className={`mt-3 w-16 h-1 bg-primary rounded ${centered ? 'mx-auto' : ''}`} />
    </div>
  );
}
