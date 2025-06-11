type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function Button({
  children,
  href = "#",
  className = "",
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`mt-10 px-8 py-3 rounded-full bg-transparent text-[#61DBFB] font-semibold text-lg border-2 border-[#61DBFB] hover:bg-[#61DBFB] hover:text-[#0a192f] transition-all duration-200 shadow-none hover:shadow-lg hover:scale-105 ${className}`}
    >
      {children}
    </a>
  );
}
