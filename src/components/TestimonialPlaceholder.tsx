interface TestimonialPlaceholderProps {
  context?: string;
}

export function TestimonialPlaceholder({
  context = "CEO",
}: TestimonialPlaceholderProps) {
  return (
    <div className="bg-[var(--color-surface)] border border-dashed border-[var(--color-border)] rounded-xl p-8 text-center">
      <div className="text-[var(--color-muted)] text-sm">
        <p className="italic mb-2">&ldquo;Testimonial placeholder&rdquo;</p>
        <p className="text-xs">— [Name], {context}</p>
      </div>
    </div>
  );
}
