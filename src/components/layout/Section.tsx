import { cn } from '@/lib/utils/cn';
import { Container } from '@/components/layout/Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  withContainer?: boolean;
}

export function Section({
  children,
  className,
  containerClassName,
  withContainer = true,
}: SectionProps) {
  if (!withContainer) {
    return <section className={cn('section-padding', className)}>{children}</section>;
  }

  return (
    <section className={cn('section-padding', className)}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
