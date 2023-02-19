import React, { useEffect } from "react";
import WorkoutDetails from "../Components/WorkoutDetails";
import Workoutform from "../Components/Workoutform.js";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();


 

 
  useEffect(() => {
 
    const fetchWorkouts = async () => {
      const response = await fetch("https://workout-back-1i3y.onrender.com/api/workouts");
      console.log(response);
      const json = await response.json();
      if (response.ok) {
        return  dispatch({ type: "SET_WORKOUTS", payload: json });
      }
     
    };

    fetchWorkouts();

  }, [dispatch]);




  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <Workoutform />
    </div>
  );
};

export default Home;
