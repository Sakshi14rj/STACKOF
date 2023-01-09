import React, { useEffect } from "react";
import PlanCard from "./Card/PlanCard";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import {useSelector} from 'react-redux'
import axios from 'axios'

const Plans = () => {
  // const [planStatus, setPlanStatus] = useState(false)
  
  var User = useSelector((state) => (state.currentUserReducer))
  
  useEffect(() => {
    const getCurrentPlanStatus = async()=> {
      const { res: data } = await axios.post(process.env.REACT_APP_NODE_JS + 'plans/getCurrentPlan', { id: User.result._id })
      console.log(data);
    }
    getCurrentPlanStatus()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div
        // className="home-container-2"
        style={{ display: "flex", height: "50%", gap: "15px", padding: '60px 10px'}}
      >
        <PlanCard
          isBuyable={false}
          noOfQuestions="1"
          price="0"
          plan="Free" />
        <PlanCard
          isBuyable={true}
          noOfQuestions="5"
          price={100}
          plan="Silver"
        />
        <PlanCard
          isBuyable={true}
          noOfQuestions="Unlimited"
          price={1000}
          plan="Gold"
        />
      </div>
    </div>
  );
};

export default Plans;
