import * as icons from 'lucide-react';

interface Props {
  name: string;
  size?: number;
  className?: string;
}

export default function Icon({ name, size = 24, className }: Props) {
  const LucideIcon = (icons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>)[name];
  if (!LucideIcon) return null;
  return <LucideIcon size={size} className={className} />;
}
