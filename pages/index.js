/* Next.js Components */
import Head from 'next/head';
import Link from 'next/Link';
import Date from '../components/date';

/* Custom Components */
import Layout, {siteTitle} from '../components/layout';

/* CSS style  */
import styles from '../styles/Home.module.css';
import utilsStyles from '../components/utils.module.css';


/* lib functions */
import { getSortedPostsData } from '../lib/posts';



export default function Home({allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>siteTitle</title>
      </Head>
      <section className={utilsStyles.headingMd}>
        <p>
          Hi my name is Name. I'm a web-developer who is trying to learn React at the moment.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilsStyles.headingMd} ${utilsStyles.padding1px}`}>
        <h2 className={utilsStyles.headingMd}> Blog </h2>
        <ul className={utilsStyles.list}>
          {allPostsData.map(({id, date, title}) => (
            <li className={utilsStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>{title}</Link>‚
              <br/>
              <small className={utilsStyles.lightText}>
                <Date dateString={date}/>
              </small>
            </li>
          ))}

        </ul>
      </section>
    </Layout>
  )
}



export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return (
    {
      props: {
        allPostsData,
      }
    }
  );
}
