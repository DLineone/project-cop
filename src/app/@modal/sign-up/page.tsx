import Button from "@/components/Button/Button";
import Modal from "@/components/Modal/Modal";
import styles from './page.module.css';

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
                <div>
                    <label htmlFor="birth_date">Дата рождения</label>
                    <input id="birth_date" type="date" placeholder="Дата рождения"/>
                </div>
                <Button type='submit'>Продолжить</Button>
            </form>
        </Modal>
    );
}