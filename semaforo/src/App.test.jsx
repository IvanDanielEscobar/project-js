import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('el semáforo cambia de color', () => {
  render(<App />);

  const boton = screen.getByRole('button', { name: /cambiar color/i });
  const luzRojo = screen.getByTestId('rojo');
  const luzAmarillo = screen.getByTestId('amarillo');
  const luzVerde = screen.getByTestId('verde');

  // click verde
  fireEvent.click(boton);
  expect(luzRojo.classList.contains('activo')).toBe(false);
  expect(luzVerde.classList.contains('activo')).toBe(true);
  expect(luzAmarillo.classList.contains('activo')).toBe(false);

  // click amarillo
  fireEvent.click(boton);
  expect(luzRojo.classList.contains('activo')).toBe(false);
  expect(luzVerde.classList.contains('activo')).toBe(false);
  expect(luzAmarillo.classList.contains('activo')).toBe(true);

  //click rojo
  fireEvent.click(boton);
  expect(luzRojo.classList.contains('activo')).toBe(true);
  expect(luzVerde.classList.contains('activo')).toBe(false);
  expect(luzAmarillo.classList.contains('activo')).toBe(false);
});
