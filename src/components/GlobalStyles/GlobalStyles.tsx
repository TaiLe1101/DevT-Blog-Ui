import { ReactNode } from 'react';
import './GlobalStyles.scss';
interface PropsTypeGlobalStyles {
  children: ReactNode;
}

function GlobalStyles({ children }: PropsTypeGlobalStyles) {
  return <>{children}</>;
}

export default GlobalStyles;
