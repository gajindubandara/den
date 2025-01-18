import { Check } from "lucide-react";
export function About() {
    const features = [
        "Free Car Parking",
        "Natural Environment",
        "Professional Guide & Security",
        "World Best Animals",
    ];
    return (
        <div className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
            <span className="text-emerald-600 font-medium">
              Welcome To Zoofari
            </span>
                        <h2 className="text-4xl font-bold">
                            Why You Should Visit Zoofari Park!
                        </h2>
                        <p className="text-gray-600">
                            Experience the wonder of wildlife in our natural sanctuary. Our
                            park offers unique opportunities to observe and learn about
                            diverse species in their natural habitat.
                        </p>
                        <ul className="space-y-4">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center space-x-3">
                                    <Check className="text-emerald-600" size={20} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <button className="bg-emerald-600 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors">
                            Read More
                        </button>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1770&auto=format&fit=crop"
                            alt="Wildlife"
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
