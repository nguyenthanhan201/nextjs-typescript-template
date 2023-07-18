import Link from "next/link";
import { memo } from "react";

const DefaultFooter = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='new_footer_logo'>
          <Link href='/' className='relative w-[10%] h-10 block'>
            DefaultFooter
          </Link>
        </div>
        <div className='new_footer_top'></div>
      </div>
    </footer>
  );
};

export default memo(DefaultFooter);
