import React, { useState } from 'react'
import img1 from '../Images/image1.png'
import img2 from '../Images/image2.png'
import img3 from '../Images/image3.png'
import spotifyLogo from '../Images/spotifylogo.png'
import appleIcon from '../Images/applelogo.png'

function Signup() {
  const [step, setStep] = useState(0);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Gender selection page (step 3)
  if (step === 3) {
    const genderOptions = [
      'Male',
      'Female',
      'Non-binary',
      'Prefer not to say',
    ];
    return (
      <div className="min-h-screen bg-black flex flex-col items-center px-4 pt-6 relative">
        {/* Back button */}
        <button
          className="absolute left-4 top-6 w-8 h-8 flex items-center justify-center bg-black rounded-full border border-gray-700"
          onClick={() => setStep(2)}
          aria-label="Back"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Title */}
        <h2 className="text-white text-lg font-bold text-center mb-8 mt-2">Create account</h2>
        {/* Gender form */}
        <div className="w-full max-w-md flex flex-col items-center">
          <label className="text-white text-xl font-bold mb-2 w-full" htmlFor="gender">What's your gender?</label>
          <div className="relative w-full mb-1">
            <button
              id="gender"
              type="button"
              className="w-full rounded-md bg-gray-700 text-white px-4 py-3 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <span>{gender || 'Select your gender'}</span>
              {gender && (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
              {!gender && (
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M7 10l5 5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </button>
            {dropdownOpen && (
              <ul className="absolute left-0 right-0 bg-gray-800 rounded-md mt-1 z-20 shadow-lg">
                {genderOptions.map(option => (
                  <li
                    key={option}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-600 ${gender === option ? 'bg-gray-600' : ''}`}
                    onClick={() => { setGender(option); setDropdownOpen(false); }}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <button
            className="w-32 bg-gray-600 text-white font-bold py-2 rounded-full mt-6 mb-2 transition disabled:opacity-60"
            disabled={!gender}
            onClick={() => {}}
          >Next</button>
        </div>
      </div>
    );
  }

  // Password entry page (step 2)
  if (step === 2) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center px-4 pt-6 relative">
        {/* Back button */}
        <button
          className="absolute left-4 top-6 w-8 h-8 flex items-center justify-center bg-black rounded-full border border-gray-700"
          onClick={() => setStep(1)}
          aria-label="Back"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Title */}
        <h2 className="text-white text-lg font-bold text-center mb-8 mt-2">Create account</h2>
        {/* Password form */}
        <div className="w-full max-w-md flex flex-col items-center">
          <label className="text-white text-xl font-bold mb-2 w-full" htmlFor="password">Create a password</label>
          <input
            id="password"
            type="password"
            className="w-full rounded-md bg-gray-700 text-white px-4 py-3 mb-1 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300"
            placeholder="Create a password."
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoFocus
          />
          <span className="text-xs text-gray-300 mb-6 w-full">Use at least 8 characters.</span>
          <button
            className="w-32 bg-gray-600 text-white font-bold py-2 rounded-full mt-2 mb-2 transition disabled:opacity-60"
            disabled={password.length < 8}
            onClick={() => setStep(3)}
          >Next</button>
        </div>
      </div>
    );
  }

  // Email entry page (step 1)
  if (step === 1) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center px-4 pt-6 relative">
        {/* Back button */}
        <button
          className="absolute left-4 top-6 w-8 h-8 flex items-center justify-center bg-black rounded-full border border-gray-700"
          onClick={() => setStep(0)}
          aria-label="Back"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        {/* Title */}
        <h2 className="text-white text-lg font-bold text-center mb-8 mt-2">Create account</h2>
        {/* Email form */}
        <div className="w-full max-w-md flex flex-col items-center">
          <label className="text-white text-xl font-bold mb-2 w-full" htmlFor="email">What's your email?</label>
          <input
            id="email"
            type="email"
            className="w-full rounded-md bg-gray-700 text-white px-4 py-3 mb-1 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder-gray-300"
            placeholder="Enter your email."
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
          />
          <span className="text-xs text-gray-300 mb-6 w-full">You'll need to confirm this email later.</span>
          <button
            className="w-32 bg-gray-600 text-white font-bold py-2 rounded-full mt-2 mb-2 transition disabled:opacity-60"
            disabled={!email}
            onClick={() => setStep(2)}
          >Next</button>
        </div>
      </div>
    );
  }

  // Main signup page (step 0)
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden px-4">
      {/* Decorative background images */}
      <img src={img1} alt="bg1" className="w-20 h-20 rounded-xl absolute top-4 left-4 rotate-6 opacity-80" style={{zIndex: 1}} />
      <img src={img2} alt="bg2" className="w-24 h-24 rounded-xl absolute top-24 right-2 -rotate-12 opacity-80" style={{zIndex: 1}} />
      <img src={img3} alt="bg3" className="w-16 h-16 rounded-xl absolute bottom-10 left-10 rotate-12 opacity-80" style={{zIndex: 1}} />
      {/* Main content */}
      <div className="flex flex-col items-center justify-center w-full max-w-xs z-10">
        {/* Spotify Logo (PNG) */}
        <div className="mb-6 mt-8">
          <img src={spotifyLogo} alt="Spotify Logo" className="w-12 h-12 mx-auto" />
        </div>
        {/* Headline */}
        <h2 className="text-white text-2xl font-bold text-center mb-2">Millions of Songs.<br/>Free on Spotify.</h2>
        {/* Sign up button */}
        <button
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-2 rounded-full mt-4 mb-2 transition"
          onClick={() => setStep(1)}
        >Sign up free</button>
        {/* Social login buttons */}
        <div className="flex flex-col gap-2 w-full mt-2">
          <button className="flex items-center justify-center w-full border border-gray-400 rounded-full py-2 bg-black text-white hover:bg-gray-900 transition">
            {/* Google icon */}
            <span className="mr-2"><svg width="20" height="20" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.86-6.86C36.68 2.7 30.77 0 24 0 14.82 0 6.73 5.8 2.69 14.09l8.01 6.22C12.6 13.99 17.85 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.6C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.7 28.31a14.5 14.5 0 0 1 0-8.62l-8.01-6.22A24.01 24.01 0 0 0 0 24c0 3.77.9 7.34 2.69 10.91l8.01-6.22z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.15 15.9-5.85l-7.19-5.6c-2.01 1.35-4.59 2.15-8.71 2.15-6.15 0-11.4-4.49-13.3-10.59l-8.01 6.22C6.73 42.2 14.82 48 24 48z"/></g></svg></span>
            Continue with Google
          </button>
          <button className="flex items-center justify-center w-full border border-gray-400 rounded-full py-2 bg-black text-white hover:bg-gray-900 transition">
            {/* Facebook icon */}
            <span className="mr-2"><svg width="20" height="20" viewBox="0 0 24 24"><path fill="#1877F3" d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 10.995 10.125 11.854v-8.385H7.078v-3.47h3.047V9.413c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953h-1.513c-1.491 0-1.953.926-1.953 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.068 24 18.092 24 12.073z"/></svg></span>
            Continue with Facebook
          </button>
          <button className="flex items-center justify-center w-full border border-gray-400 rounded-full py-2 bg-black text-white hover:bg-gray-900 transition">
            {/* Apple icon */}
            <span className="mr-2"><img src={appleIcon} alt="" className='w-4 h-4' /></span>
            Continue with Apple
          </button>
        </div>
        {/* Log in link */}
        <button className="w-full text-gray-300 text-center mt-4 underline hover:text-white transition bg-transparent">Log in</button>
      </div>
    </div>
  )
}

export default Signup
