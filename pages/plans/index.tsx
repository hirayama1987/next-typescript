import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '../../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore';


export default function Plans() {
  const [plans, setPlans] = useState([]);


  useEffect(() => {
    const plansCollectionRef = collection(db, 'plans');

    console.log(plansCollectionRef);
    getDocs(plansCollectionRef).then((querySnapshot) => {
      setPlans(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    console.log('sss');
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { title, body } = event.target.elements;
    console.log(title.value, body.value);
    const plansCollectionRef = collection(db, 'plans');
    const documentRef = await addDoc(plansCollectionRef, {
      title: title.value,
      body: body.value,
    });
    console.log(documentRef);
  };

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <form onSubmit={handleSubmit}>
        <div>
          <label>タイトル</label>
          <input name="title" type="text" placeholder="タイトル" />
        </div>
        <div>
          <label>詳細</label>
          <input name="body" type="text" placeholder="詳細" />
        </div>
        <div>
          <button>登録</button>
        </div>
      </form>
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="flex justify-between items-end gap-4 mb-6">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold">Plans</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-6">
          {plans.map((plan) => (
            <div key={plan.id}>
              <Link href={'plans/'+ plan.title }>
                <a className="group block bg-gray-100 rounded-lg overflow-hidden shadow-lg mb-2 p-1 lg:mb-3">
                  <div className="flex flex-col">
                    <h3>{plan.title}</h3>
                    <p
                       className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100">
                      {plan.body}
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
