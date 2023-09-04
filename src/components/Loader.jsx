import { RotatingSquare } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className="Overlay">
      <RotatingSquare color="#3503ff" width="250" height="250" />
    </div>
  );
};
