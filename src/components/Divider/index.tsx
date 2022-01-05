import styles from './styles.module.css';

const Divider = ({
  className,
  ...rest
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>) => <div {...rest} className={`${styles.root} ${className}`} />;

export default Divider;
