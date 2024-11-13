import Priceoption from "../Priceoption/Priceoption";

const Priceoptions = () => {
   const priceoptions = [
        {
          "id": 1,
          "price": 29.99,
          "features": ["Access to all gym equipment", "Locker room access", "1 free personal training session", "Free Wi-Fi"]
        },
        {
          "id": 2,
          "price": 49.99,
          "features": ["Access to all gym equipment", "Locker room access", "3 personal training sessions", "Group fitness classes", "Free Wi-Fi", "Sauna access"]
        },
        {
          "id": 3,
          "price": 69.99,
          "features": ["Access to all gym equipment", "Locker room access", "Unlimited personal training", "Group fitness classes", "Free Wi-Fi", "Sauna and pool access", "Nutrition counseling"]
        },
        {
          "id": 4,
          "price": 89.99,
          "features": ["Access to all gym equipment", "VIP locker room access", "Unlimited personal training", "Group fitness classes", "Free Wi-Fi", "Sauna, pool, and spa access", "Advanced nutrition and meal planning", "Priority class booking"]
        }
      ]
      
    return (
        <div>
            <h2 className="text-5xl font-bold">Fitness Trainning Centre</h2>
            <div className=" grid grid-cols-3">
            {
                priceoptions.map(priceoption => <Priceoption key={priceoption.id} priceoption={priceoption}></Priceoption>)
            }                
            </div>

        </div>
    );
};

export default Priceoptions;