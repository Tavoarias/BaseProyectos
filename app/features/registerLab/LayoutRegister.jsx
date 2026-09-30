import useRegister from './hooks/useRegister';
import Register from './components/register';
import {TEXTOS} from './constants/register.constants';

export default function LayoutRegister() {
  const {
    participantes,
    mensaje,
    registrarParticipante,
  } = useRegister();

  return (
    <main>
      <h1>{TEXTOS.TITULO}</h1>

      <Register
        participantes={participantes}
        mensaje={mensaje}
        registrarParticipante={registrarParticipante}
      />
    </main>
  );
}