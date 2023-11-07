import { useState } from 'react';

const GetStarted = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }

    setEmail('');
    setError('');
  };

  const validateEmail = (value) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(value);
  };

  return (
    <section className="">
      <div className="container relative ">
        <div className="bg-primary-darkBlueIntro w-full md:w-[70%] mx-auto  md:absolute left-[50%] md:translate-x-[-50%]   md:top-[-150px] rounded-[10px] py-10 px-14 text-center text-white">
          <h3 className="font-bold text-[19px] md:text-[35px]">Get early access today</h3>
          <p className="opacity-[0.8] my-[20px] w-full md:w-[70%] mx-auto">
            It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
            questions, our support team would be happy to help you.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center gap-2 flex-wrap justify-center md:justify-between">
              <input
                type="text"
                className="focus:outline-none text-black w-full md:w-[68%]   p-4 rounded-[100px]"
                value={email}
                onChange={handleEmailChange}
                placeholder="email@example.com"
              />
              <button type="submit" className="btn w-full md:w-fit py-[15px] px-[25px]" role="link">
                Get Started For Free
              </button>
            </div>
            {error && (
              <span className="md:pl-2 mt-2 text-accent-lightRed w-full block text-center md:text-start">
                {error}
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
