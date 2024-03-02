export const Container = ({ className = '', children }) => {
    return <div className={`container mx-auto ${className} h-full`}>{children}</div>;
  };