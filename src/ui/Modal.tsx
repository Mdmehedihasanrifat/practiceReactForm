
const Modal = ({isOpen,onClose}) => {
 return (
    <>
 {isOpen &&<div>
 <h1>This is Modal component</h1>
 </div>}
 </>
 )
};

export default Modal;