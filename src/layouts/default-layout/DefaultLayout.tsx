import DefaultFooter from "../default-footer/DefaultFooter";

const DefaultLayout = ({ ...props }: any) => {
  return (
    <>
      <div className='container app'>
        <div className='main'>
          {props.children}
          <DefaultFooter />
        </div>
      </div>
    </>
  );
};

export default DefaultLayout;
