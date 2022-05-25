import React from "react";
import "./requests.css";
import { useForm } from "react-hooks-helper";
function UserRequests() {
  const defaultData = { IncomeTaxyear: "", MonthlyIncome: "" };
  const [formData, setForm] = useForm(defaultData);
  const { IncomeTaxyear, MonthlyIncome } = formData;
  return (
    <div className="container">
      <div className="row d-flex justify-content-center py-5">
        <div className="col-md-3 tax">
          <h1>User Requests</h1>
        </div>
      </div>
      <div className="row tax d-flex justify-content-center">
        <h1>TEsd</h1>
      </div>
    </div>
  );
}

export default UserRequests;
