import clsx from 'clsx';
import { Aspect, Testimony } from '../types';

const AspectBlock = ({ type, text }: Testimony | Aspect) => {
  return (
    <div className={clsx('flex flex-col rounded-lg bg-divider')}>
      <header
        className={clsx(
          'rounded-lg px-4 py-2 font-semibold',
          type === 'Factual' ? 'bg-fact' : 'bg-legal',
        )}
      >
        {type} Aspects
      </header>

      <div className="px-4 py-2">{text}</div>
    </div>
  );
};

export default AspectBlock;
