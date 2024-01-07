import { classNames } from '6shared/lib/classNames/classNames';
import styles from './Sidebar.module.scss';
import { useState } from 'react';
import { ThemeSwitcher } from '3widgets/ThemeSwitcher';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(styles.sidebar, [className], {
        [styles.collapsed]: collapsed,
      })}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        {/* LangSwitcher */}
      </div>
    </div>
  );
};
