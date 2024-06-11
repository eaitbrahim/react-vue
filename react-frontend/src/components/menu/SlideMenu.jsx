import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './SlideMenu.module.scss';

function SlideMenu() {
  const [categories, setCategories] = useState([
    { name: 'Sensors', isOpen: false, items: ['Sensor 1', 'Sensor 2', 'Sensor 3'] },
    { name: 'Reports', isOpen: false, items: ['Report 1', 'Report 2', 'Report 3'] },
    { name: 'Configuration', isOpen: false, items: ['Setting 1', 'Setting 2', 'Setting 3'] },
  ]);

  const toggleCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories[index].isOpen = !updatedCategories[index].isOpen;
    setCategories(updatedCategories);
  };

  return (
    <div className={styles.slideMenu}>
      {categories.map((category, index) => (
        <div key={index} className={styles.category}>
          <div className={styles.categoryHeader} onClick={() => toggleCategory(index)}>
            <span className={styles.categoryText}>{category.name}</span>
            <div className={styles.plusIcon}>
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          {category.isOpen && (
            <ul className={styles.menuItems}>
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className={styles.menuItem}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default SlideMenu;