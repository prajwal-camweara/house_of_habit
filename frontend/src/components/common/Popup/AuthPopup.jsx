import { useState, useEffect } from 'react';
import styles from './AuthPopup.module.css';
import MobileStep from './MobileStep';
import OtpStep from './OtpStep';
import EmailStep from './EmailStep';
import SuccessStep from './SuccessStep';
import LogoWhite from '../../../assets/icons/hoh-logo-white.svg?react';

const STEPS = { MOBILE: 'mobile', OTP: 'otp', EMAIL: 'email', SUCCESS: 'success' };

const AuthPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(STEPS.MOBILE);
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleClose = () => {
    setStep(STEPS.MOBILE);
    setPhone('');
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case STEPS.MOBILE:
        return <MobileStep phone={phone} setPhone={setPhone} onSubmit={() => setStep(STEPS.OTP)} />;
      case STEPS.OTP:
        return <OtpStep phone={phone} onVerify={() => setStep(STEPS.EMAIL)} />;
      case STEPS.EMAIL:
        return <EmailStep phone={phone} onSubmit={() => setStep(STEPS.SUCCESS)} />;
      case STEPS.SUCCESS:
        return <SuccessStep bgColor='#F4F4F4' />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <button className={styles.closeBtn} onClick={handleClose} aria-label='Close'>
        &#x2715;
      </button>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.leftPanel}>
          <div className={styles.leftContent}>
            <LogoWhite className={styles.logo} />
            <p className={styles.welcomeText}>Welcome! Resister to avail the deals!</p>
          </div>
        </div>

        <div className={styles.rightPanel}>{renderStep()}</div>
      </div>
    </div>
  );
};

export default AuthPopup;
