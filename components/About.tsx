export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">About Our Church</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            For over 25 years, Grace Community has been a beacon of hope and faith in our neighborhood, 
            bringing people together in worship, service, and fellowship.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/8468107/pexels-photo-8468107.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Church Community"
              className="rounded-lg shadow-lg w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-black">Our Mission</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are dedicated to spreading God's love through worship, community service, and spiritual growth. 
              Our church family welcomes everyone with open arms, regardless of where they are in their faith journey.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="text-2xl font-bold text-black">500+</h4>
                <p className="text-gray-600">Members</p>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow">
                <h4 className="text-2xl font-bold text-black">25+</h4>
                <p className="text-gray-600">Years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}