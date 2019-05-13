import React from 'react';
import {scopedClassMaker} from "../helpers/classes";
import './layout.less';


const addPrefix = scopedClassMaker('hdd-layout');
const ap = addPrefix;

interface FooterProps extends React.HTMLAttributes<HTMLElement> {

}

const Footer: React.FunctionComponent<FooterProps> =
  ({
     className, children, ...restProps
   }) => {
    return (
      <div className={ap('footer',{extra:className})} {...restProps}>
        {children}
      </div>
    );
  };

export default Footer;
