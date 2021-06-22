import Head from "next/head";
import Link from "next/link";

function Home() {
  return (
    <>
      <Head>
        <title> HomePage </title>
      </Head>
      <div>
        <h1> Home Page Mário Varela </h1>
      </div>

      <div>
        <ul>
          <li>
            <Link href="/about"> About </Link>
          </li>
          <li>
            {" "}
            <Link href="/contact"> Contact </Link>{" "}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Home;
