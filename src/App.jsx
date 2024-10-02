import React, { useState, useEffect } from 'react'; // Импортируем useState и useEffect
import { Spinner } from './components/Spinner';

function App() {
  const [isLoading, setIsLoading] = useState(true); // Состояние для загрузки

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Убираем спиннер через 3 секунды
    }, 10000);
    return () => clearTimeout(timer); // Очищаем таймер при размонтировании
  }, []);

  return (
    <>
      <Spinner isLoading={isLoading} /> {/* Передаем состояние isLoading в Spinner */}
    </>
  )
}

export default App