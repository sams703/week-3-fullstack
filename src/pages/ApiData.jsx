import React, { useEffect, useState } from 'react';
import Card from '../components/Card.jsx';

export default function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
      .then((res) => res.json())
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {data.map((post) => (
        <Card key={post.id} title={post.title}>
          <p>{post.body}</p>
        </Card>
      ))}
    </div>
  );
}
