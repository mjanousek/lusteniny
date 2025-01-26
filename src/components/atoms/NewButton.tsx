import { classNames } from '../../utils';
import { Icon, type IconType } from './Icon';

type Props = {
  text: string;
  size?: 'regular' | 'large';
  icon?: IconType;
  color?: 'green' | 'blue' | 'pink-gradient';
} & ({ onClick: () => void } | { to: string } | { externalHref: string } | { type: 'submit' });

export const Button = (props: Props) => {
  const size = props.size ?? 'regular';
  const color = props.color ?? 'green';

  const className = classNames(
    'rounded-lg text-green-50 hover:text-white shadow hover:shadow-lg',
    'group relative block overflow-hidden font-medium duration-700',
    size === 'regular' && 'px-7 py-3.5 tracking-wide',
    size === 'large' && 'px-8 py-4 text-lg tracking-wider',
    color === 'green' && 'bg-gradient-to-r from-green-600 to-green-700 shadow-green-800/30',
    color === 'blue' && 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-blue-800/30',
    color === 'pink-gradient' && 'bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 shadow-pink-800/30',
  );

  const bubbleClassName = classNames(
    'pointer-events-none absolute right-[70%] top-[50%] aspect-square w-[150%]  rounded-full bg-black/10',
    'transition-all duration-700 group-hover:-top-[100%] group-hover:-right-[20%]',
  );

  if ('to' in props)
    return (
      <a href={props.to} className={className}>
        <div className={bubbleClassName} />
        <span className="relative z-10 flex items-center gap-4">
          <span>{props.text}</span>
          {props.icon && (
            <span>
              <Icon icon={props.icon} className="h-4 transition duration-500 group-hover:translate-x-1.5"></Icon>
            </span>
          )}
        </span>
      </a>
    );

  if ('externalHref' in props)
    return (
      <a href={props.externalHref} className={className} target="_blank" rel="noopener noreferrer">
        <div className={bubbleClassName} />
        <span className="relative z-10 flex items-center gap-4">
          <span>{props.text}</span>
          {props.icon && (
            <span>
              <Icon icon={props.icon} className="h-4 transition duration-500 group-hover:translate-x-1.5"></Icon>
            </span>
          )}
        </span>
      </a>
    );
};
