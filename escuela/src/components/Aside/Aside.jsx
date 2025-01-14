import React from 'react';
import styles from '../Aside/Aside.module.css';

function Aside() {


  return (
    <div className={styles['container-aside']}>
      <ul class="nav flex-column mb-auto text-center">
        <li class="nav-item">
          <a href="/alumnos" class="nav-link py-3 border-bottom rounded-0" title="Alumnos">
            <i class="bi bi-person-fill text-black"></i>
          </a>
        </li>
        <li class="nav-item">
          <a href="/inscripciones" class="nav-link py-3 border-bottom rounded-0" title="Inscripciones">
            <i class="bi bi-person-badge-fill text-black"></i>
          </a>
        </li>
        <li>
          <a href="/recibos" class="nav-link py-3 border-bottom rounded-0" title="Recibos">
            <i class="bi bi-receipt text-black"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Aside;