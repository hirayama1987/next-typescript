import { useCallback, useState} from "react";
import {Plan} from "../types/plan";
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

export const useAllPlans = () => {
  const [plans, setPlans] = useState<Array<Plan>>([]);

  const getPlans = useCallback(() => {
    const plansCollectionRef = collection(db, 'plans');
    getDocs(plansCollectionRef).then((querySnapshot) => {
      setPlans(querySnapshot.docs.map((doc) => { return doc.data() as Plan; }));
    });  }, []);

  return {getPlans, plans}
}