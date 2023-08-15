'use client';
import { useRouter } from 'next/navigation';
import styles from './Modal.module.css';
import ClickAwayListener from 'react-click-away-listener';
import { useEffect } from 'react';

export default function Modal({children, ...props})
{
    useEffect(() => {
        document.addEventListener('keydown', (e) => {
            const ESCAPE_CODE = 27
            if(e.keyCode  == ESCAPE_CODE)
            {
                console.log(e.key);
                router.back();
            }
        })
    }, []);

    const router = useRouter();
    return (
        <div {...props} className={styles.modal}>
            <ClickAwayListener onClickAway={() => router.back()} mouseEvent='mousedown'>
                {children}
            </ClickAwayListener>
        </div>
    );
}