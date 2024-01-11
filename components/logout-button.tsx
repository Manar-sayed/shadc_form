'use client';

// import { logout } from '@/actions/logout';

interface LogoutButtonProps {
  children?: React.ReactNode;
}
const LogoutButton = ({ children }: LogoutButtonProps) => {
  // const onClick = () => {
  //   logout();
  // };
  return <span className=" cursor-pointer">{children}</span>;
};

export default LogoutButton;
