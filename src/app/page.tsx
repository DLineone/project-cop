'use client';
import Link from 'next/link';
import styles from './page.module.css';
import Button from './../components/Button/Button';
import { useRouter } from 'next/navigation';
import { IconBrandPinterest } from '@tabler/icons-react';

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.home}>
      <div className={styles.navbar}>
        <IconBrandPinterest size={50} stroke={1.5}/>
        <div className={styles.sub_navbar}>
          <Button onClick={() => router.push('/login')}>
            Login
          </Button>
          <Button onClick={() => router.push('/sign-up')} variant='soft'>
            Sign-up
          </Button>
        </div>
      </div>  
    </div>
  )
}
