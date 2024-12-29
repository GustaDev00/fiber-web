export interface ButtonSwipeProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
