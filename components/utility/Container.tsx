export default function Container({ children }: any) {
  return (
    <>
      <div className="container mx-auto px-3">{children}</div>
    </>
  );
}
