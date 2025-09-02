type WithLoadingProps = {
  isLoading?: boolean;
};

export function withLoading<P extends object>(
  Component: React.ComponentType<P>
) {
  return (props: P & WithLoadingProps) => {
    const { isLoading, ...rest } = props;
    if (isLoading) return <p>Loading...</p>;
    return <Component {...(rest as P)} />;
  };
}
