export default function useLogin(setUsuario, setContador) {
  const handleUserChange = (event) => {
    setUsuario(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (setContador) {
      setContador((prev) => prev + 1);
    }
  };

  return {
    handleUserChange,
    handleLogin,
  };
}