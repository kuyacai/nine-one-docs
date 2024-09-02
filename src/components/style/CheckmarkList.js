import React from 'react';
import styles from './CheckmarkList.module.css';

const CheckmarkList = ({ children }) => {
  return <ul className={styles.checkmarkList}>{children}</ul>;
};

export default CheckmarkList;