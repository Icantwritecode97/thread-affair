import Head from 'next/head';

export default function Test() {
  return (
    <div>
      <Head>
        <title>Thread Affair</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Hello
      <div>
        <i className="fa-solid fa-phone"></i>
        <button className="button">Test</button>
        <button className="button button-large">Test Large</button>
        <a className="button">Test</a>
        <a className="button button-large">Test Large</a>
      </div>
      <div className="mt-4">
        <span className="badge">New Entry</span>

        <span className="badge badge-font-large">-50%</span>

        <span className="badge badge-secondary">New entry</span>

        <span className="badge badge-secondary badge-font-large">-5%</span>

      </div>
    </div>
  );
}
// in jsx nu exista taguri de auto inchidere
