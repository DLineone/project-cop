'use client';
import Modal from "@/components/Modal/Modal";
import styles from './page.module.css';
import Button from './../../../components/Button/Button';

export default function Page()
{
    return (
        <Modal>
            <form className={styles.form} action="">
                <legend>
                    <h1>
                        Добро пожаловать!
                    </h1>
                </legend>
                <div>
                    <label htmlFor="email">Адрес электронной почты</label>
                    <input id="email" type="email" placeholder="Адрес электронной почты"/>
                </div>
                <div>
                    <label htmlFor="password">Пароль</label>
                    <input id="password" type="password" placeholder="Пароль"/>
                </div>
                <Button type='submit'>Login</Button>
            </form>
        </Modal>
    )
}