export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8 font-sans">
      <h1 className="text-5xl font-bold mb-6 text-blue-400">Contact Us</h1>
      <p className="text-xl text-gray-300 mb-8">Let's build something great together.</p>
      
      {/* Working Web3Forms Contact Form */}
      <form 
        action="https://api.web3forms.com/submit" 
        method="POST"
        className="w-full max-w-md bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-700"
      >
        {/* Your personal Web3Forms Access Key */}
        <input type="hidden" name="access_key" value="30bf817d-88b1-4a5c-bfb2-009dc6feacf5" />
        
        {/* Redirects back to your site after submitting */}
        <input type="hidden" name="redirect" value="http://localhost:3000/contact?success=true" />

        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Name</label>
          <input type="text" name="name" required className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2">Email</label>
          <input type="email" name="email" required className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-400 mb-2">Message</label>
          <textarea name="message" required className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500 h-32"></textarea>
        </div>
        
        <button type="submit" className="w-full py-3 bg-blue-500 hover:bg-blue-600 rounded font-bold transition shadow-lg hover:shadow-blue-500/50">
          Send Message
        </button>
      </form>

      <a href="/" className="mt-8 text-gray-400 hover:text-white transition">← Back to Home</a>
    </div>
  );
}