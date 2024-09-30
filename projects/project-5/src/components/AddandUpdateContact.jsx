import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import Modal from './Modal';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

const AddandUpdateContact = ({ isOpen, onClose, isUpdate, contact }) => {
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
  });

  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
      onClose();
      toast.success("Contact added successfully");
    } catch (error) {
      console.error("Error adding contact:", error);
      // Optional: Show a user-friendly error message
    }
  };

  const updateContact = async (values) => {
    try {
      const contactRef = doc(db, "contacts", contact.id);
      await updateDoc(contactRef, values);
      onClose();
      toast.success("Contact updated successfully");
    } catch (error) {
      console.error("Error updating contact:", error);
      // Optional: Show a user-friendly error message
    }
  };

  return (
    <div>
      <Modal isOpen={isOpen} onClose={onClose}>
        <Formik
          initialValues={{
            name: isUpdate ? contact.name : '',
            email: isUpdate ? contact.email : ''
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            if (isUpdate) {
              await updateContact(values);
            } else {
              await addContact(values);
            }
            setSubmitting(false);
            resetForm();
            onClose();
          }}
        >
          {({ isSubmitting }) => (
            <Form className='flex flex-col gap-4'>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name</label>
                <Field name="name" className="border h-10" />
                <ErrorMessage name="name" component="div" className="text-red-600" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Field name="email" className="border h-10" />
                <ErrorMessage name="email" component="div" className="text-red-600" />
              </div>
              <button
                type='submit'
                className='bg-orange px-3 py-1.5 border self-end'
                disabled={isSubmitting}
              >
                {isUpdate ? "Update" : isSubmitting ? 'Adding...' : 'Add Contact'}
              </button>
            </Form>
          )}
        </Formik>
      </Modal>
    </div>
  );
}

export default AddandUpdateContact;
