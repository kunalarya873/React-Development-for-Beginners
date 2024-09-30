import { HiOutlineUserCircle } from "react-icons/hi";
import { RiEditCircleLine } from "react-icons/ri";
import { IoMdTrash } from "react-icons/io";
import { deleteDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { doc } from "firebase/firestore";
import AddandUpdateContact from "./AddandUpdateContact";
import useDisclouse from '../hooks/useDisclouse';
import { toast } from "react-toastify";
const ContactCard = ({ contact }) => {
  const {isOpen, onClose, onOpen} = useDisclouse();

  const deleteContact = async (id) =>{
    try {
        await deleteDoc(doc(db, "contacts", id))
        toast.success("Contact deleted successfully")
    } catch (error) {
      console.error(error)
    }
  }
  return (<>
    <div key={contact.id} className="bg-yellow flex justify-between items-center p-2 rounded-lg gap-2">
          <div className="flex gap-2">
            <HiOutlineUserCircle className="text-4xl text-orange"/>
            <div className="">
              <h2 className="text-lg">{contact.name}</h2>
              <p className="text-sm">
              {contact.email}
              </p>
            </div>

          </div>
            <div className="flex">
              <RiEditCircleLine onClick={onOpen} className="text-4xl cursor-pointer"/>
              <IoMdTrash className="text-orange text-4xl cursor-pointer" onClick={()=>{
                deleteContact(contact.id)
              }}/>
            </div>
          </div>
          <AddandUpdateContact contact={contact} isUpdate isOpen={isOpen} onClose={onClose}/>
        </> 
  )
}

export default ContactCard;