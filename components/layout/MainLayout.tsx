import { Layout } from "antd";
import useAuth from "../../hooks/useAuth";

// const { Content } = Layout;

export default function MainLayout({ children }: any): JSX.Element {
  const isAuthenticated = useAuth(true);
  if (!isAuthenticated) {
    return <> {children}</>;
  }
  return <>{children}</>;
}
