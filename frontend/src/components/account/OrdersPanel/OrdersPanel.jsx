import { useNavigate } from 'react-router-dom';
import styles from './OrdersPanel.module.css';
import PanelHeader from '../PanelHeader/PanelHeader';
import Button from '../../common/Button/Button';

import ArrowIcon from '../../../assets/icons/arrow-btn.svg?react';
import OrdersBagIcon from '../../../assets/icons/orders-bag-icon.svg?react';

const OrdersPanel = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.panel}>
      <PanelHeader title='Order History' subtitle='View and track your past orders.' />

      <div className={styles.emptyState}>
        <OrdersBagIcon width={140} height={160} />
        <p className={styles.emptyText}>You haven't placed any orders yet.</p>
        <Button variant='dark' size='sm'>
          Continue Shopping <ArrowIcon width={30} height={30} />
        </Button>
      </div>
    </div>
  );
};

export default OrdersPanel;
