import {cn} from '@/src/lib/utils';

interface LogoProps {
  className?: string,
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn(className, 'flex justify-center items-center text-2xl font-bold')}>
      Logo
    </div>
  );
};

export default Logo;