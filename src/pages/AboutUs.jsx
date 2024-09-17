import React from 'react';
import NavBar from '../components/NavBar';
import Footer from "../components/Footer";
import haircut1 from '../img/haircut1.jpg';
import haircut2 from "../img/haircut2.jpg";
import haircut3 from "../img/haircut3.jpg";
import haircut4 from "../img/haircut4.jpg";
import Swal from 'sweetalert2'
const AboutUs = () => {
	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
	
		formData.append("access_key", "c3412beb-fb6f-4891-a9f9-65a17b4a339b");
	
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);
	
		const res = await fetch("https://api.web3forms.com/submit", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		  },
		  body: json
		}).then((res) => res.json());
	
		if (res.success) {
			Swal.fire({
				title: "Success!",
				text: "Message sent successfully!",
				icon: "success"
			  });
		}
	  };
  return (
    <>
    <NavBar />
	<section className='min-h-screen hero-section relative flex flex-col justify-center items-center text-center w-full'>
		<div className='pt-24 sm:pt-36 md:pt-48'>
			<h1 className='font-serif text-4xl sm:text-6xl md:text-8xl text-white'>
			About Our Company
			</h1>
		</div>
	</section>	
	
    	<section className='h-80 w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
			<div className='w-full max-w-md sm:max-w-lg lg:max-w-xl py-2 px-3 text-center'>
				<p className='font-semibold text-2xl sm:text-3xl lg:text-4xl mb-4 sm:mb-6'>
				We're About the Best Hair Cuts
				</p>
				<p className='text-sm sm:text-base lg:text-lg'>
				Westside Barber Co. is a barbershop in Santa Monica that provides the best haircuts in town. We pride ourselves on being the best barbershop in Santa Monica and have convenient parking by Pacific Palisades, Los Angeles. Come to Westside Barber Co. for your barbershop needs!
				</p>
			</div>
		</section>

		<section className='min-h-screen flex flex-col items-center gap-4 sm:grid sm:grid-cols-2 sm:justify-items-center lg:flex lg:flex-row lg:flex-wrap lg:justify-center text-center'>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut1} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut2} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		<div>
			<div className='border text-center w-72 h-60'>
				<img src={haircut3} className='w-full h-full object-cover' alt="haircut image" />
			</div>
			<p>Done by: Amrit Gurung</p>
		</div>
		</section>
		
		<section className='min-h-screen flex justify-center items-center'>
			<form action="" className='max-w-[600px] w-full p-6 rounded-lg shadow' onSubmit={onSubmit}>
			<h3 className='text-center text-3xl'>Contact Us</h3>
				<div className='mt-5'>
					<label htmlFor="">First Name</label>
					<input type="text" className='w-full h-12 border rounded-md p-4 text-base from-neutral-300 mt-2' placeholder='First Name' name='first name' required/>
				</div>
				<div className='mt-5'>
					<label htmlFor="">Last Name</label>
					<input type="text" className='w-full h-12 border rounded-md p-4 text-base from-neutral-300 mt-2' placeholder='Last Name' name='last name' required/>
				</div>
				<div className='mt-5'>
					<label htmlFor="">Email</label>
					<input type="email" className='w-full h-12 border rounded-md p-4 text-base from-neutral-300 mt-2' placeholder='Email' name='email' required/>
				</div>
				<div className='mt-5'>
					<label htmlFor="">Message</label>
					<textarea name="message" id="" className='w-full border rounded-md p-4 text-base from-neutral-300 mt-2 h-48 resize-none' placeholder='Message' required></textarea>
				</div>
				<button className='w-full bg-emerald-400 h-14 rounded-md shadow text-white' type='submit'>Submit</button>
			</form>
		</section>
		<Footer />
    </>
  )
}

export default AboutUs