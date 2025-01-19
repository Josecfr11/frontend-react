import React from 'react';
import styles from '../Aside/Aside.module.css';

function Aside() {


  return (
    <div className={styles['container-aside']}>
      <ul className="nav flex-column mb-auto text-center">
        <li className="nav-item">
          <a href="/alumnos" className="nav-link py-3 border-bottom rounded-0" title="Alumnos">
            <i className="bi bi-person-fill text-black"></i>
          </a>
        </li>
        <li className="nav-item">
          <a href="/inscripciones" className="nav-link py-3 border-bottom rounded-0" title="Inscripciones">
            <i className="bi bi-person-badge-fill text-black"></i>
          </a>
        </li>
        <li>
          <a href="/recibos" className="nav-link py-3 border-bottom rounded-0" title="Recibos">
            <i className="bi bi-receipt text-black"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Aside;