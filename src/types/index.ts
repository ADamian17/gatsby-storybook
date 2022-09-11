export type HeadingType = {
  text: string;
  variant?: 'blue' | 'yellow' | 'red';
  handleClick?: (e: React.MouseEvent) => void;
};
