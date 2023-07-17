import DefaultFooter from "../default-footer/DefaultFooter";
import DefaultHeader from "../default-header/DefaultHeader";

const DefaultLayout = ({ ...props }: any) => {
  return (
    <>
      <DefaultHeader />
      <div className="container app">
        <div className="main">
          {props.children}
          <DefaultFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
