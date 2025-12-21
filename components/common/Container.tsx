
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={`w-full md:max-w-[1288px] mx-auto px-5 xl:px-0  ${className}`}>{children}</div>
  )
}

export default Container