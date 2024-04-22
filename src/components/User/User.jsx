import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  const { id } = useParams();
  // console.log(taskid);
  return (
    <>
      <div className="text-4xl text-center bg-slate-600 p-4 text-white">
        User: {userid}
      </div>
      <div className="text-4xl text-center bg-slate-600 p-4 text-white">
        Task: {id}
      </div>
    </>
  );
}

export default User;
