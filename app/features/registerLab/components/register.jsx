import { useState } from 'react';
import { MAX_PARTICIPANTES } from '../constants/register.constants';
import { TEXTOS } from '../constants/register.constants';

export default function Register({participantes,mensaje,registrarParticipante,}) {
  const [nombre, setNombre] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const registroCorrecto = registrarParticipante(nombre);

    if (registroCorrecto) {
      setNombre('');
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">
          {TEXTOS.NOMBRE}
        </label>

        <input
          id="nombre"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
        />

        <button type="submit">
          {TEXTOS.REGISTRAR}
        </button>

        <p>{mensaje}</p>
      </form>

      <section>
        <p>
          {TEXTOS.REGISTRADOS}: {participantes.length}
        </p>

        <p>
          {TEXTOS.DISPONIBLES}: {MAX_PARTICIPANTES - participantes.length}
        </p>
      </section>

      <section>
        <h2>{TEXTOS.LISTA}</h2>

        {participantes.length === 0 ? (
          <p>{TEXTOS.LISTA_VACIA}</p>
        ) : (
          <ul>
            {participantes.map((participante, index) => (
              <li key={`${participante}-${index}`}>
                {participante}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}