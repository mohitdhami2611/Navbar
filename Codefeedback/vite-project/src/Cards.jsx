import { useState } from "react"

const Cards = () => {

    const aspects = [
        "Readability",
        "Performance",
        "Security",
        "Documentation",
        "Testing"
    ]

    const [upVotes, setUpVotes] = useState(Array(aspects.length).fill(0))
    const [downVotes, setDownVotes] = useState(Array(aspects.length).fill(0))

    const handelupVotes = (index) => {
        setUpVotes(prev => {
            const updated = [...prev]
            updated[index] += 1
            return updated
        })
    }

    const handledownVotes = (index) => {
        setDownVotes(prev => {
            const updated = [...prev]
            updated[index] += 1
            return updated
        })
    }

    return (
        <div className="max-w-[1100px] mx-auto text-center">
            <h1 className="flex justify-center items-center bg-amber-200 text-3xl font-bold py-4">
                Code Feedback System
            </h1>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
                {aspects.map((aspect, index) => (
                    <div key={index} className="border border-gray-300 shadow-md rounded-xl p-6 w-[250px]">
                        <h2 className="text-xl font-semibold">{aspect}</h2>

                        <div className="flex justify-around mt-5">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 mr-3 rounded-md hover:opacity-80"
                                onClick={() => handelupVotes(index)}
                            >
                                👍 Upvote
                            </button>

                            <button
                                className="bg-red-500 text-white py-2 px-4 ml-2 rounded-md hover:opacity-80"
                                onClick={() => handledownVotes(index)}
                            >
                                👎 Downvote
                            </button>
                        </div>

                        <p className="mt-4">
                            Upvotes: <strong>{upVotes[index]}</strong>
                        </p>

                        <p>
                            Downvotes: <strong>{downVotes[index]}</strong>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards
