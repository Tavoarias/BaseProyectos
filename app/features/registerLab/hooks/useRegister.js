import { useState } from 'react';
import {MAX_PARTICIPANTES,TEXTOS,} from '../constants/register.constants';

export default function useRegister() {
  const [participantes, setParticipantes] = useState([]);
  const [mensaje, setMensaje] = useState('');

  function registrarParticipante(nombre) {
    const nombreLimpio = nombre.trim();

    if (nombreLimpio === '') {
      setMensaje(TEXTOS.NOMBRE_INVALIDO);
      return false;
    }

    if (participantes.length >= MAX_PARTICIPANTES) {
      setMensaje(TEXTOS.CUPO_COMPLETO);
      return false;
    }

    setParticipantes((listaAnterior) => [
      ...listaAnterior,
      nombreLimpio,
    ]);

    setMensaje(TEXTOS.REGISTRO_CORRECTO);
    return true;
  }

  return {
    participantes,
    mensaje,
    registrarParticipante,
  };
}