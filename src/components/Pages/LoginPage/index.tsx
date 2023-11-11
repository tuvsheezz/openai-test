export default function LoginPage() {
  return (
    <>
      <p>LoginPage</p>
      <p
        onClick={() => {
          localStorage.setItem("isLoggedIn", "true");
          window.location.reload();
        }}
      >
        Login
      </p>
    </>
  );
}
