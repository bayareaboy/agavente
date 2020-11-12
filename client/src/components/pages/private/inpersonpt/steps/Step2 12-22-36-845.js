import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { chooseReason } from "../../../../reducers/iptsteps";

const Step2 = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const reason = useSelector((state) => state.reason);
  const { register, handleSubmit } = useForm({ defaultValues: { reason } });

  const onSubmit = (data) => {
    dispatch(chooseReason(data.reason));
    history.push("./step3");
  };
  return (
    <div className="space-3 col-md-6 container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="reason">
            Why are you requesting a Physical Therapist?
          </label>
          <select
            className="form-control"
            id="reason"
            name="reason"
            ref={register}
          >
            <option value="default">Select a Reason</option>
            <option value="back pain">Lower Back Pain</option>
            <option value="neck pain">Neck Pain</option>
            <option value="Shoulder pain">Shoulder Pain</option>
            <option value="Knee pain">Knee Pain</option>
            <option value="Elbow pain">Elbow Pain</option>
            <option value="Ankle pain">Ankle Pain</option>
            <option value="post surgery">Post Surgery Motion Restore</option>
            <option value="post surgery">
              Stay healthier/build exercise plan
            </option>
            <option value="post surgery">Other</option>
          </select>
        </div>
        <br />
        <button className="btn btn-primary">Next</button>
      </form>
    </div>
  );
};

export default Step2;
