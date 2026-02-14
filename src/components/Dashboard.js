import { useState } from "react";

const Dashboard = () => {
    const [count, setCount] = useState(0);
    const [email, setEmail] = useState("");
    const [online, setOnline] = useState(false);

    return (
        <div className="p-6 font-sans max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

            {/* Counter */}
            <div className="mb-6 p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Counter</h3>
                <p className="mb-3">Value: {count}</p>
                <button
                    onClick={() => setCount(count + 1)}
                    className="px-3 py-1 bg-blue-600 text-white rounded"
                >
                    +
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="px-3 py-1 bg-gray-600 text-white rounded ml-2"
                >
                    -
                </button>
            </div>

            {/* Input */}
            <div className="mb-6 p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Email Input</h3>
                <input
                    type="email"
                    placeholder="type email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded px-3 py-2 w-full mb-2"
                />
                <p className="text-sm text-gray-600">
                    Typed: {email || "nothing yet"}
                </p>
            </div>

            {/* Toggle */}
            <div className="p-4 border rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Status</h3>
                <button
                    onClick={() => setOnline(!online)}
                    className={`px-3 py-1 text-white rounded ${online ? "bg-red-600" : "bg-green-600"
                        }`}
                >
                    Set {online ? "Offline" : "Online"}
                </button>

                <p className="mt-2">
                    User is: {online ? "🟢 Online" : "🔴 Offline"}
                </p>
            </div>
        </div>
    );
};

export default Dashboard;
