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
        <section id="about"className="flex text-center p-10 bg-gradient-to-r from-purple-300 to-blue-200 gap-20">
            <div>
                <h1 className="text-4xl font-bold">Say Goodbye <span role="img" aria-label="wave">👋</span> to <br /> Grammar Mistakes!</h1>
                <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                    Struggling with Sinhala grammar? Our advanced AI-powered tool helps you identify mistakes, understand corrections, and improve your writing effortlessly.
                </p>
            </div>
            <div className="mt-10 flex justify-center">
                <img src={Pic1} alt="Grammar Checker" className="w-96 rounded-lg shadow-md" />
            </div>
        </section>
        <section id="features" className="p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold">Correcting Grammatical Errors</h2>
                <p className="mt-2 text-gray-600">
                    Automatically detects and corrects grammatical mistakes in Sinhala text. Highlights errors and provides suggestions for improvement.
                </p>
                <img src={Pic2} alt="Correction" className="mt-4 ml- w-32 " />
            </div>
            <div className="bg-white p-6 shadow-md rounded-lg">
                <h2 className="text-xl font-bold">Suggest Similar Words</h2>
                <p className="mt-2 text-gray-600">
                    Provides alternative words with similar meanings to enhance vocabulary. Helps refine writing by suggesting more suitable words.
                </p>
                <img src={Pic3} alt="Suggestion" className="mt-4 w-32" />
            </div>
        </section>
        <section className="bg-gray-100 min-h-screen p-12">
            <h2 className="text-3xl font-bold text-center text-purple-700 mb-8">How It Works?</h2>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
                <div>
                    <h3 className="text-xl font-semibold">1. Enter your text</h3>
                    <p className="text-gray-700">Type or paste your Sinhala text into the input box.</p>
                </div>
                <img src={Pic1} alt="Step 1" className="rounded-lg shadow-md" />
        
                <img src={Pic5} alt="Step 2" className="rounded-lg shadow-md" />
                <div>
                    <h3 className="text-xl font-semibold">2. AI checks your writing</h3>
                    <p className="text-gray-700">Our tool analyzes grammatical errors and suggests a correct version.</p>
                </div>
        
                <div>
                    <h3 className="text-xl font-semibold">3. Get similar word suggestions</h3>
                    <p className="text-gray-700">For highlighted words, we provide alternative word choices to refine your writing.</p>
                </div>
                <img src={Pic4} alt="Step 3" className="rounded-lg shadow-md" />
        
                <div className="text-center mt-8">
                    <div className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md hover:bg-purple-600">Get started</div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold">4. Copy or Download</h3>
                    <p className="text-gray-700">Copy the improved text or download it for later use.</p>
                </div>
            </div>
              
        </section>
        <section id="faq" className="p-12 bg-blue-100">
            <h2 className="text-2xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="mt-6 max-w-2xl mx-auto">
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">What is this tool and how does it work?</summary>
                    <p className="text-gray-600 mt-2">Our tool analyzes Sinhala grammar and suggests corrections.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Is this tool free to use?</summary>
                    <p className="text-gray-600 mt-2">Yes, it's completely free.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Do I need to create an account to use this?</summary>
                    <p className="text-gray-600 mt-2">Yes.</p>
                </details>
                <details className="mb-4">
                    <summary className="font-semibold cursor-pointer">Does it highlight mistakes?</summary>
                    <p className="text-gray-600 mt-2">Yes, it highlights mistakes and suggests corrections.</p>
                </details>
            </div>
        </section>
        <footer className="p-3 bg-purple-300 text-center flex justify-between items-center">
            <div className="flex items-center">
                <img src={Logo_img} alt="Logo" className="w-20 h-20" />
            </div>
            <div className="space-x-6">
                <a href="#about" className="hover:text-white font-semibold">About</a>
                <a href="#faq" className="hover:text-white font-semibold">Get Help</a>
            </div>
            <div className="space-x-20 flex">
                <a href="https://www.facebook.com/profile.php?id=61573618317072" className="text-2xl">
                    <img src={facebookIcon} alt="Facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/vyakarana.site/" className="text-2xl">
                    <img src={instagramIcon} alt="Instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/company/105934369/admin/dashboard/" className="text-2xl">
                    <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6" />
                </a>
            </div>
        </footer>
    </div>
    );
}

export default marketing;