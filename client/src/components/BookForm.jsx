import  { useState } from 'react';
import toast from 'react-hot-toast';

const BookForm = ({onAddBook}) => {

    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")


        const handleSubmit = (e) => {
            e.preventDefault()

            if(!title.trim()  || !author.trim()) return
           
            onAddBook({title, author})

            toast.success("book saved successfully")
            setTitle("")
            setAuthor("")
        }

    return (
        <form onSubmit={handleSubmit} className='bg-white p-5 rounded-xl shadow-lg mb-6'>
            <h1 className='text-center'>Add New Book</h1>

            <div className='mb-4'>
                <label className='block text-gray-700 text-sm font-bold mb-2'>Book Title</label>
              
                <input 
                    type='text'
                    value={title}
                    onChange={(e)=> setTitle(e.target.value)}
                    placeholder='Enter Book Title'
                    className='w-full px-3 border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />

                 <label className='block text-gray-700 text-sm font-bold mb-2'>Book Author</label>
               
                <input 
                    type='text'
                    value={author}
                    onChange={(e)=> setAuthor(e.target.value)}
                    placeholder='Enter Book Author'
                    className='w-full px-3 border rounded-lg h-10 focus:outline-none focus:ring-2 focus:ring-blue-500'
                />


                <button type='submit' className='w-full cursor-pointer bg-blue-500 my-4 text-white py-2 px-4'>Add Book</button>
            </div>
        </form>
    );
};

export default BookForm;