import { useEffect, useState } from 'react';
import { BloC } from '../../domain';

export function useBloCState<T>(bloc: BloC<T>) {
  const [state, setState] = useState(bloc.state);

  useEffect(() => {
    const subscription = bloc.subscribe(setState);
    return () => bloc.unsubscribe(subscription);
  }, [bloc]);

  return state;
}