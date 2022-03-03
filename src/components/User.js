import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function User() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => setUser(res.data))
      .finally(() => setLoading(false)
      );
  }, [id]);
  return (
    <div>
      <h1>User Detail</h1>
      {loading && <div>Loading...</div>}
      {!loading && <code>{JSON.stringify(user)}</code>}
      
      <br />
      <br />
      {(parseInt(id) <= 9) ? <Link to={`/user/${parseInt(id) +1}`}>Next User ({parseInt(id) +1})</Link> : <Link to={`/user/${parseInt(id)}`}>Next User ({parseInt(id)})</Link> }

      {/* <Link to={`/user/${parseInt(id) +1}`}>Next User ({parseInt(id) +1})</Link> */}
    </div>
  );
}

export default User;
