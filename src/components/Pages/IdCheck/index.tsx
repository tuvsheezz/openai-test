import { useParams } from "react-router";

export default function IdCheck() {
  const { id } = useParams();
  return (
    <>
      <p>{id}</p>
    </>
  );
}
