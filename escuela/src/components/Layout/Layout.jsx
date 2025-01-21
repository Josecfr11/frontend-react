// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from '../Layout/Layout.module.css';
import Aside from '../Aside/Aside'

function Layout() {
    return (
        <div className={styles['container-layout']}>
            <Aside></Aside>
            <div className={styles['container-layout__container-page']}>
                <header className={styles['container-page__header']}>
                    <h1>Escuela</h1>
                </header>

                <main className={styles['container-page__page']}>
                    <Outlet />
                </main>
                <footer className={styles['container-page__footer']}>
                    <p>&copy; 2025 Mi Aplicación</p>
                </footer>
            </div>
        </div>
    );
}

export default Layout;