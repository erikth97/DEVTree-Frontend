import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <div>Login View</div>

        <nav>
          <Link to="/auth/register">
            ¿No tienes cuenta? Crea una aqui
          </Link>
        </nav>
    </>
  );
}