import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Github() {
    const { username } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
                setLoading(false);
            })
            .catch(err => console.log(err));
    }, [username]);
    if (loading) {
        return <p className="text-center mt-20">Loading...</p>;
    }
    return (
        <div>
            <h1 className="text-4xl text-center mt-20">{data.name}</h1>
            <div className="flex justify-center mt-10">
                <img
                    src={data.avatar_url}
                    alt="Avatar"
                    className="rounded-full h-40 w-40"
                />
            </div>
            <div className="text-center p-10">
                <p>Followers: {data.followers}</p>
                <p>Location: {data.location}</p>
            </div>
        </div>
    );
}

export default Github;
