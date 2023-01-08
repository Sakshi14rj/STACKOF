import React, { useEffect, useState } from "react";
import PlanCard from "./Card/PlanCard";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import {useSelector} from 'react-redux'
import axios from 'axios'

const Plans = () => {
  const [plan, setPlan] = useState("free");
  const [planStatus, setPlanStatus] = useState(false)
  
  var User = useSelector((state) => (state.currentUserReducer))
  
  useEffect(() => {
    const getCurrentPlanStatus = async()=> {
      const { res: data } = await axios.post(process.env.REACT_APP_NODE_JS + 'plans/getCurrentPlan', { id: User.result._id })
      console.log(data);
    }
    return () => {
      getCurrentPlanStatus()
    }
  }, [])
  
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div
        className="home-container-2"
        style={{ display: "flex", height: "50%", gap: "15px" }}
      >
        <PlanCard isBuyable={false} noOfQuestions="1" price="0" plan="Free" />
        <PlanCard
          isBuyable={true}
          noOfQuestions="5"
          price={100}
          plan="Silver"
          pay={(token) => {
            setPlan("Silver");
            // handleSubmit(token);
          }}
        />
        <PlanCard
          isBuyable={true}
          noOfQuestions="Unlimited"
          price={1000}
          plan="Gold"
          pay={(token) => {
            setPlan("Gold");
            // handleSubmit(token);
          }}
        />
      </div>
    </div>
  );
};

export default Plans;
