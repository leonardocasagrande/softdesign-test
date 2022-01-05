import { ReactNode } from 'react';
import styles from './styles.module.css';

type TContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: TContainerProps) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default Container;
