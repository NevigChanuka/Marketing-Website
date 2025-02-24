import React from "react";
import Logo_img from '../Pictures/logo.png';
import Pic1 from '../Pictures/Pic_1.jpeg';
import Pic2 from '../Pictures/Pic_2.jpg';
import Pic3 from '../Pictures/Pic_3.jpg';
import Pic4 from '../Pictures/Pic_4.jpeg';
import Pic5 from '../Pictures/Pic_5.jpeg';
import facebookIcon from "../Pictures/facebook_logo.png";
import instagramIcon from "../Pictures/insta_logo.png";
import linkedinIcon from "../Pictures/linkedin_logo.png";

function marketing () {
    return(
        <div className="bg-gray-100 min-h-screen font-sans">
            <nav className="bg-white shadow-md p-4 flex justify-between items-center border-b-2 border-blue-300">
            <div className="text-xl font-bold flex items-center">
                <img src={Logo_img} alt="Logo" className="w-10 h-10 mr-2" />
            </div>
            <div className="space-x-6">
                <a href="#about" className="hover:text-blue-500 font-semibold">About</a>
                <a href="#features" className="hover:text-blue-500 font-semibold">Features</a>
                <a href="#faq" className="hover:text-blue-500 font-semibold">FAQ</a>
                <a href="#reviews" className="hover:text-blue-500 font-semibold">Reviews</a>
            </div>
        </nav>
        <section className="bg-gradient-to-r from-purple-300 to-blue-200 h-100 flex items-center justify-center px-10 mb-20">
            <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="text-center md:text-left">
                    <h1 className="text-5xl font-bold text-gray-900 leading-snug font-f1">
                        Say Goodbye <span role="img" aria-label="wave">👋</span>
                        <br /> to <span className="text-black">Grammar Mistakes!</span>
                    </h1>
                    <p className="mt-4 text-gray-700 text-lg leading-relaxed">
                        Struggling with Sinhala grammar? Our advanced AI-powered tool helps you identify
                        mistakes, understand corrections, and improve your writing effortlessly, whether
                        for school, work, or everyday communication.
                    </p>
                </div>
                <div className="flex justify-center mt-40">
                    <img
                        src={Pic1} 
                        alt="Sinhala Grammar Checker"
                        className="w-full md:w-[450px] rounded-lg shadow-xl border border-gray-200"
                    />
                </div>
            </div>
        </section>
        <section id="features" className="p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold font-f2">Correcting Grammatical Errors</h2>
                <p className="mt-2 text-gray-600">
                    Automatically detects and corrects grammatical mistakes in Sinhala text. Highlights errors and provides suggestions for improvement.
                </p>
                <img src={Pic2} alt="Correction" className="mt-4 ml- w-32 " />
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold font-f2">Suggest Similar Words</h2>
                <p className="mt-2 text-gray-600">
                    Provides alternative words with similar meanings to enhance vocabulary. Helps refine writing by suggesting more suitable words.
                </p>
                <img src={Pic3} alt="Suggestion" className="mt-4 w-32" />
            </div>
        </section>
        <section className="p-12">
            <h2 className="text-4xl font-bold text-purple-600 text-center">How It Works?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-10 ml-20 mr-20 ">
                <div className="justify-items-center ">
                    <h3 className="font-semibold justify-start">1. Enter your text</h3>
                    <p>Type or paste your Sinhala text into the input box.</p>
                    <img src={Pic4} alt="Step 1" className="mt-4 max-w-90 rounded-lg border-4 border-gray-400" />
                </div >
                <div className="justify-items-center ">     
                    <h3 className="font-semibold">2. AI checks your writing</h3>
                    <p>Our tool analyzes grammatical errors and suggests a correct version.</p>
                    <img src={Pic1} alt="Step 2" className="mt-4 max-w-90 rounded-lg border-4 border-gray-400" />
                </div>
                <div className="justify-items-center ">
                    <h3 className="font-semibold">3. Get similar word suggestions</h3>
                    <p>For highlighted words, we provide alternative word choices to refine your writing.</p>
                    <img src={Pic5} alt="Step 3" className="mt-4 max-w-90 rounded-lg border-4 border-gray-400" />
                </div>
                <div className="justify-items-center ">
                    <h3 className="font-semibold">4. Copy or Download</h3>
                    <p>Copy the improved text or download it for later use.</p>
                    <div className="text-center mt-20">
                        <div className="bg-purple-500 text-white w-60 py-2 rounded-lg text-lg hover:bg-purple-600">Get started</div>
                    </div>
                </div>
            </div>
            
        </section>
        <section id="faq" className="p-12 bg-blue-100">
            <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-6 max-w-2xl mx-auto">
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">What is this tool and how does it work?</summary>
                    <p className="text-gray-600 mt-2 ml-10">Vyakarana is an AI powered Sinhala grammar checker and word suggestion tool. 
                        It detects grammar mistakes, provides corrections, and offers alternative word suggestions. Simply paste, type or 
                        upload your text and Vyakarana will analyze it to help improve your Sinhala writing.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Is this tool free to use?</summary>
                    <p className="text-gray-600 mt-2 ml-10">Yes, Vyakarana offers free grammar checking and word suggestions. 
                        However, we may introduce premium features in the future for advanced corrections and additional functionalities.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Do I need to create an account to use this?</summary>
                    <p className="text-gray-600 mt-2 ml-10">No, you can use Vyakarana without creating an account. However, signing up may unlock additional features, such as saving corrections and giving feedback.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Is my data secure and private?</summary>
                    <p className="text-gray-600 mt-2 ml-10">Yes, Vyakarana prioritizes user privacy and data security. We do not store or share any text that users input into the tool. All processing happens securely, 
                        and we follow strict data protection policies to ensure your information remains private.</p>
                </details>
            </div>
        </section>
        <footer className="p-5 bg-purple-300 text-center flex justify-between items-center">
            <div className="flex items-center">
                <img src={Logo_img} alt="Logo" className="ml-10 w-35 h-35" />
            </div>
            <div className="space-x-6">
                <a href="#about" className="hover:text-white font-semibold">About</a>
                <a href="#faq" className="hover:text-white font-semibold">Features</a>
                <a href="#faq" className="hover:text-white font-semibold">About Us</a>
                <a href="#faq" className="hover:text-white font-semibold">Get Help</a>
            </div>
            <div  className="mr-10">
                <div>
                    <p className=" text-[36px] mb-5 font-Bold">Follow Us</p>             
                    </div>
                <div className="space-x-20 flex">
                    <a href="https://www.facebook.com/profile.php?id=61573618317072" className="text-2xl">
                        <img src={facebookIcon} alt="Facebook" className="w-10 h-10" />
                    </a>
                    <a href="https://www.instagram.com/vyakarana.site/" className="text-2xl">
                        <img src={instagramIcon} alt="Instagram" className="w-10 h-10" />
                    </a>
                    <a href="https://www.linkedin.com/company/105934369/admin/dashboard/" className="text-2xl">
                        <img src={linkedinIcon} alt="LinkedIn" className="w-10 h-10" />
                    </a>
                </div>
            </div>
        </footer>
    </div>
    );
}

export default marketing;