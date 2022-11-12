interface ErrorMessageProps {
  error: string;
}
export default function ErrorMessage({ error }: ErrorMessageProps) {
  return (
    <div className="h-screen w-screen flex justify-center items-center text-bold text-2xl">
      <p>{error}</p>
    </div>
  );
}
