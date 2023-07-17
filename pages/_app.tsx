import { Roboto } from "@next/font/google";
import { Fragment } from "react";

type Props = {
  Component: any;
  pageProps: any;
};

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["vietnamese"],
});

function MyApp({ Component, pageProps }: Props) {
  const Layout = Component.Layout ? Component.Layout : Fragment;
  const layoutProps = Component.LayoutProps ? Component.LayoutProps : {};

  return (
    <main className={roboto.className}>
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
export default MyApp;
