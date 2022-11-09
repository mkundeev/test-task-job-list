interface ErrorMessageProps {
  error: string;
}
export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <p>{error}</p>;
}
