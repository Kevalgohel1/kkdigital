export default function Contact() {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 font-sans">
        <h1 className="text-5xl font-bold mb-6 text-blue-400">Contact Us</h1>
        <p className="text-xl text-gray-300 mb-8">Let's build something great together.</p>
        
        {/* Contact Form */}
        <form className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700">
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Name</label>
            <input type="text" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2">Email</label>
            <input type="email" className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 h-32"></textarea>
          </div>
          <button className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded font-bold transition shadow-lg hover:shadow-blue-500/50">
            Send Message
          </button>
        </form>
  
        <a href="/" className="mt-8 text-gray-400 hover:text-white transition">← Back to Home</a>
      </div>
    );
  }