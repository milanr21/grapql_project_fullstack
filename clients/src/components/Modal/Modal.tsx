import React, { useState } from 'react';
import { FaUserAlt } from 'react-icons/fa';
import { ADD_CLIENT } from '../../mutation/AddClient';
import { GET_CLIENTS } from '../../queries/getClientsQueries';
import { useMutation } from '@apollo/client';
interface ModalProps {
  title: string;
}

export default function Modal({ title }: ModalProps) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [showModal, setShowModal] = useState(false);
  const [addClient] = useMutation(ADD_CLIENT, {
    variables: { name, email, phoneNo },
    refetchQueries: [{ query: GET_CLIENTS }],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || phoneNo === '') {
      alert('Please fill in all fields');
      return;
    }

    addClient(name, email, phoneNo);

    setName('');
    setEmail('');
    setPhoneNo('');

    setShowModal(false);
  };

  return (
    <>
      <button
        className='bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex flex-row gap-2 justify-center align-middle items-center'
        type='button'
        onClick={() => setShowModal(true)}
      >
        <FaUserAlt className='' />
        <span>Add Client</span>
      </button>
      {showModal ? (
        <>
          <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
            <div className='relative w-auto my-6 mx-auto max-w-3xl'>
              {/*content*/}
              <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                {/*header*/}
                <div className='flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t'>
                  <h3 className='text-3xl font-semibold'>{title}</h3>
                  <button
                    className='p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none'
                    onClick={() => setShowModal(false)}
                  >
                    <span className='bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none'>
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className='relative p-6 flex-auto'>
                  <form onSubmit={onSubmit}>
                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='name'
                      >
                        Name
                      </label>
                      <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='name'
                        type='text'
                        placeholder='Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className='mb-4'>
                      <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='email'
                      >
                        Email
                      </label>
                      <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='email'
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className='mb-6'>
                      <label
                        className='block text-gray-700 text-sm font-bold mb-2'
                        htmlFor='phoneNo'
                      >
                        Phone Number
                      </label>
                      <input
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                        id='phoneNo'
                        type='text'
                        placeholder='Phone Number'
                        value={phoneNo}
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </div>

                    <div className='flex items-center justify-between'>
                      <button
                        className='bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                        type='submit'
                      >
                        Add Client
                      </button>
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
                  <button
                    className='text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    type='submit'
                    className='bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                    type='button'
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
        </>
      ) : null}
    </>
  );
}
