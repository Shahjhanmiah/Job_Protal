
import logo from '../assets/Tablet login-bro.png'
import Swal from 'sweetalert2';


const Home = () => {


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.email.value
        const email = form.email.value;
        const password = form.password.value;
        const text = form.text.value;
        console.log(name, email, password,text);


        Swal.fire({
            title: 'Success!',
            text: 'Create User as a Successfully',
            icon: 'success',
            confirmButtonText: 'Confirm'
        })



            .then(error => console.log(error))
    }

    // create in google siging



    return (
        <div>

            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 p-6 rounded border">

                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    Name
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered rounded border p-2 w-full" />
                            </div>
                            <br></br>
                            <div className="form-control">
                                <label className="label">
                                    Eamil:
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered rounded border p-2 w-full" required />
                            </div>
                            <br></br>
                            <div className="form-control">
                                <label className="label">
                                    Password
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered rounded border p-2 w-full" required />

                            </div>
                            <br></br>
                            
                            <div className="flex items-center">
                                <input type="text" name='text' placeholder="Text area"  className="w-full border rounded-l p-5"  />
                                <button type="submit" className="bg-blue-500 text-white rounded-r p-2">
                                    Submit
                                </button>
                            </div>
                        </form>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;