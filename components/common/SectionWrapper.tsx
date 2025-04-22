interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    bgColor?: string; // Tailwind background color class, e.g., "bg-gray-100"
    hasDivider?: boolean;
  }
  
  export function SectionWrapper({
    children,
    className = "",
    id,
    bgColor = "",
    hasDivider = false,
  }: SectionWrapperProps) {
    return (
      <section
        id={id}
        className={`${bgColor} ${hasDivider ? "border-t border-gray-200" : ""} w-full py-20 ${className}`}
      >
        <div className="container mx-auto px-6">
          {children}
        </div>
      </section>
    );
  }
  