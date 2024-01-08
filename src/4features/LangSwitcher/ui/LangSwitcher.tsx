import { classNames } from '6shared/lib/classNames/classNames';
import styles from './LangSwitcher.module.scss';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from '6shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const onToggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(styles.langswitcher, [className])}
      onClick={onToggle}
      theme={ThemeButton.CLEAR}
    >
      {t('Язык')}
    </Button>
  );
};
