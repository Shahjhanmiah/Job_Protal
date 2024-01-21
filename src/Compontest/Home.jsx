
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
 

const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    ['link'],       // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
    ['clean']                                         // remove formatting button
];


const module = {
    toolbar: toolbarOptions
}
const quillStyle = {
    height: '300px'
}



const Addnewpost = () => {

    


  





   

   

   






   




    // console.log({ title, value, imgUrl, category, tags })



    return (
        <div className='mt-[100px] '>
            <div className='card card-compact bg-base-100 shadow-xl w-[60%] mx-auto'>
                <h1 className='w-full bg-blue-600 text-white rounded py-3 mx-auto text-center font-bold'>Add New Post</h1>
                <div className='mx-auto lg:w-full'>
                    <form className="card-body" >
                        <div className="form-control">
                            <label htmlFor='title' className="label" >
                               
                            </label>


                        </div>
                        <div className="form-control">
                            <label htmlFor='desc' className="label">
                               
                            </label>
                            <ReactQuill theme="snow"  modules={module} style={quillStyle} />



                        </div>
                        <div className="form-control mt-20">
                            <label htmlFor='image' className="label">
                               
                            </label>
                            


                        </div>
                        <div className="form-control">
                            <label htmlFor='category' className="label">
                              
                            </label>
                

                                
                            

                        </div>

                        <div className="form-control">
                            <label htmlFor='tags' className="label" >
                                
                            </label>

                            <div className='flex justify-between items-center'>

                                
                            </div>
                          
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn bg-blue-600 text-white hover:bg-blue-800 duration-300" type="submit" value="Add Post" />
                        </div>
                    </form>

                </div>

            </div>
        </div>
    )
}

export default Addnewpost