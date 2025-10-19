const [count, setCount] = React.useState<number>(0); //Указываем тип number
const [status, setStatus] = React.useState<'idle' | 'loading' | 'error'>('idle');
// literal union type
// idle - ничего не происходит
// loading - идёт загрузка
// error - ошибка загрузки