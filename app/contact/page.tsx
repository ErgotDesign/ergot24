import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
const phone = "+4917647517324";

const page = () => {
	return (
		<div className="w-full lg:h-[720px] bg-beige text-beige text-2xl font-extrabold flex justify-center items-center overflow-hidden tracking-widest">
			<div className="bg-bblack w-11/12 h-[30rem] mt-20 rounded-full flex justify-between items-center border-bblack border-8">
				<div className="w-1/2 h-full bg-purple rounded-l-full uppercase text-justify flex justify-center items-center">
					<h1 className="w-full text-8xl px-12 bg-bblack rounded-l-xl  text-center">
						contact
					</h1>
				</div>
				<div className="w-1/2 h-full flex flex-col justify-center items-center ">
					<a
						href={`tel:${phone}`}
						rel="noopener noreferrer"
						aria-label="CallMe"
						className="flex justify-between uppercase text-justify w-1/2"
					>
						<span className="text-purple">Mobile: </span>{" "}
						+4917647517324
					</a>
					<a
						href="mailto:info@ergot.eu"
						className="flex justify-between  text-justify w-1/2"
					>
						<span className="text-purple uppercase">MAIL:</span>{" "}
						info@ergot.eu
					</a>
				</div>
			</div>
		</div>
	);
};

export default page;
