/* Next.js Components */
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

/* CSS styles */
import styles from './layout.module.css';
import utilsStyles from './utils.module.css';



const name = "Nam Dan Nhu";
export const siteTitle = "My PostPage";


export default function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel='icon' href='/favicon.svg'></link>
                <meta
                    name='description'
                    content='This is my first site I build by following the tutorial of Next.js'
                />
                <title>siteTitle</title>
                <meta
                    property='og:image'
                    content={
                        `https://og-image.vercel.app/${encodeURI(
                            siteTitle,
                        )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta
                    property='og:title'
                    content={siteTitle}
                />
                <meta
                    property='twitter:card'
                    content='summary_large_image'
                />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Link href='/'>
                            <Image
                                priority
                                src='/Profile.jpeg'
                                className={utilsStyles.borderCircle}
                                height={108}
                                width={108}
                                alt='profile picture'
                            ></Image>
                        </Link>
                        <h1 className={utilsStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href='/'>
                            <Image
                                priority
                                src='/Profile.jpeg'
                                className={utilsStyles.borderCircle}
                                height={108}
                                width={108}
                                alt='profile picture'
                            />
                        </Link>
                        <h2 className={utilsStyles.headingLg}>
                            <Link href='/' className={utilsStyles.colorInherit}>
                                {name}
                            </Link>
                        </h2>
                    </>
                )}
            </header>
            <main>
                {children}
            </main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href='/'>
                        Back to Home
                    </Link>
                </div>
            )}
        </div>

    );
}