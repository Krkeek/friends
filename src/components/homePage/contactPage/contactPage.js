import styles from './contactPage.module.css'
import React from "react";
const ContactPage = (props,ref)=>{
    return(
        <>
        <div ref={ref} className={'PageSection'}>
            Contact
        </div>
        </>
    );


}

export default React.forwardRef(ContactPage);